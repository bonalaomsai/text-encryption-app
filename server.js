const express = require('express');
const path = require('path');
const { encrypt, decrypt } = require('./encryption-module');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/encrypt', (req, res) => {
  const textToEncrypt = req.body.text;
  const encryptedText = encrypt(textToEncrypt);
  res.json({ encryptedText });
});

app.post('/decrypt', (req, res) => {
  const textToDecrypt = req.body.text;
  const decryptedText = decrypt(textToDecrypt);
  res.json({ decryptedText });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
