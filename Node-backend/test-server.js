const io = require('socket.io-client');

// Replace 'http://localhost:3000' with the actual URL of your Socket.IO server
const socket = io('http://localhost:3000');

// Handle 'message' event
socket.on('play', (data) => {
    console.log('Received data:', data);
});

// Emit 'message' event
socket.emit('message', { message: 'Hello from the client!' });
