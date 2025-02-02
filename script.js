// Typing Animation
const typingText = document.getElementById('typing-text');
const text = "Mahasiswa Aktif Politeknik Negeri Bandung | D3 Teknik Informatika";
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

type();