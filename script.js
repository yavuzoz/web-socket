// script.js

// WebSocket bağlantısı kuruyoruz
const socket = new WebSocket('ws://localhost:8080');

// Bağlantı açıldığında
socket.addEventListener('open', (event) => {
  console.log('Sunucuya bağlanıldı');
  displayMessage('Sunucuya bağlanıldı');
});

// Sunucudan gelen mesajları işliyoruz
socket.addEventListener('message', (event) => {
  console.log('Mesaj alındı:', event.data);
  displayMessage('Sunucudan gelen mesaj: ' + event.data);
});

// WebSocket bağlantısı kapandığında
socket.addEventListener('close', (event) => {
  console.log('Sunucu bağlantısı kapandı');
  displayMessage('Sunucu bağlantısı kapandı');
});

// WebSocket hatası olduğunda
socket.addEventListener('error', (error) => {
  console.error('WebSocket hatası:', error);
  displayMessage('WebSocket hatası');
});

// Mesajları ekrana eklemek için yardımcı fonksiyon
function displayMessage(message) {
  const p = document.createElement('p');
  p.textContent = message;
  document.getElementById('messages').appendChild(p);
}

// Butona tıklanıldığında, sunucuya mesaj gönderiyoruz
document.getElementById('sendMessage').addEventListener('click', () => {
  const message = 'Merhaba Sunucu!';
  console.log('Mesaj gönderiliyor:', message);
  socket.send(message); // Sunucuya mesaj gönder
});
