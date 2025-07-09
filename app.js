const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Hello from Utsav\'s CI/CD Node.js App using Docker + Jenkins!');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
