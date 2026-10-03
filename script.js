const text = "Hey! Acknowledging our friendship in pure code... You are one of the most amazing people I've met in this SWE journey. Keep shining! 🚀";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  } else {
    document.getElementById("secretBtn").style.display = "inline-block";
  }
}

function showSecret() {
  document.getElementById("secretText").innerText = "🔑 Secret Note: Let's build something epic together this semester!";
}

window.onload = typeWriter;