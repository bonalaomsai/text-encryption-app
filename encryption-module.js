const crypto = require('crypto');

// Ensure the ENCRYPTION_KEY is exactly 32 bytes (256 bits) long
const ENCRYPTION_KEY = '12345678901234567890123456789012'; // 32-character key
const IV = Buffer.from('00000000000000000000000000000000', 'hex'); // 16-byte IV, fixed value for consistency

function encrypt(text) {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), IV);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(encryptedText) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), IV);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

module.exports = { encrypt, decrypt };
