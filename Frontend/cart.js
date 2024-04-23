const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3100;

// Dummy data for cart items
let cartItems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Using EJS as the templating engine

// Route to render the cart page
app.get('/cart', (req, res) => {
    res.render('cart', { cartItems });
});

// Route to handle adding items to the cart
app.post('/addToCart', (req, res) => {
    const newItem = {
        itemName: req.body.itemName,
        itemDate: req.body.itemDate,
        itemLocation: req.body.itemLocation
    };
    cartItems.push(newItem);
    res.redirect('/cart');
});

// Route to handle removing items from the cart
app.post('/removeFromCart', (req, res) => {
    const indexToRemove = parseInt(req.body.index);
    cartItems.splice(indexToRemove, 1);
    res.redirect('/cart');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
