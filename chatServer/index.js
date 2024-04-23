const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const users = {}; // Store user information (name and socket ID)

io.on('connection', (socket) => {
  // Prompt the user for their name
  socket.emit('request name');

  // When a user sends their name
  socket.on('send name', (name) => {
    // Store the user's name and associate it with their socket ID
    users[socket.id] = name;
    
    // Emit a message to all clients about the new user joining
    io.emit('chat message', { user: 'system', msg: `${name} has joined the chat.` });
  });

  // When a user sends a message
  socket.on('chat message', (msg) => {
    // Emit the message along with the user's name
    io.emit('chat message', { user: users[socket.id], msg: msg });
  });
});
server.listen(4000, () => {
  console.log('listening on *:4000');
});