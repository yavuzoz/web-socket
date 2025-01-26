// server.js

const WebSocket = require('ws');

// WebSocket sunucusunu başlatıyoruz
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('Client connected');

  // Sunucu her 5 saniyede bir mesaj gönderiyor
  const intervalId = setInterval(() => {
    const message = 'Current time: ' + new Date().toLocaleTimeString();
    socket.send(message);  // Mesajı istemciye gönder
  }, 5000);

  // İstemciden gelen mesajları dinliyoruz
  socket.on('message', message => {
    console.log('Received:', message);
  });

  // İstemci bağlantıyı kapattığında
  socket.on('close', () => {
    clearInterval(intervalId);  // Intervali temizle
    console.log('Client disconnected');
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
