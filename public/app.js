document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById('input-text');
  const encryptBtn = document.getElementById('encrypt-btn');
  const decryptBtn = document.getElementById('decrypt-btn');
  const resultDiv = document.getElementById('result');

  encryptBtn.addEventListener('click', async () => {
    const textToEncrypt = inputText.value;
    const response = await fetch('/encrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: textToEncrypt })
    });
    const data = await response.json();
    resultDiv.textContent = `Encrypted text: ${data.encryptedText}`;
  });

  decryptBtn.addEventListener('click', async () => {
    const textToDecrypt = inputText.value;
    const response = await fetch('/decrypt', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: textToDecrypt })
    });
    const data = await response.json();
    resultDiv.textContent = `Decrypted text: ${data.decryptedText}`;
  });
});
