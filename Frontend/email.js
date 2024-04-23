const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 1200;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, World!"); // You can send any response you want here
});

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydatabase", { useNewUrlParser: true, useUnifiedTopology: true });

// Check MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log("Connected to MongoDB");
});

// Define a schema for emails
const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    }
});

// Create a model based on the schema
const Email = mongoose.model("Email", emailSchema);

// Handle POST request to save email
app.post("/api/saveEmail", async (req, res) => {
    try {
        const { email } = req.body;
        // Check if email field is present in the request body
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        // Create a new instance of the Email model with the provided email
        const newEmail = new Email({ email });
        // Save the email to the database
        await newEmail.save();
        res.status(201).json({ message: "Email saved successfully" });
    } catch (error) {
        console.error("Error saving email:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
