const text = "Hey! You are one of the most amazing people, I've met in this SWE journey. Keep shining! Let's build something epic together this semester! 🚀";
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
  document.getElementById("secretText").innerText = ` \n🍒 🎀 𝐼𝓃 𝐸𝓃𝑔𝓁𝒾𝓈𝒽 𝒲𝑒 𝒮𝒶𝓎 𝐼 𝒸𝒽🍑𝓈𝑒 𝒴❀𝓊 𝐼𝓃 𝒫💮𝑒𝓉𝓇𝓎 𝒲𝑒 𝒮𝒶𝓎 𝒢𝒾𝓋𝑒 𝑀𝑒 𝒜 𝒯𝒽🍪𝓊𝓈𝒶𝓃𝒹 💮𝒻 𝒞𝒽🌞𝒾𝒸𝑒𝓈 𝒜𝓃𝒹 𝑀𝓎 𝐻𝑒𝒶𝓇𝓉 𝒲𝒾𝓁𝓁 𝒮𝓉𝒾𝓁𝓁 𝒦𝓃💗𝓌 𝒴🌺𝓊𝓇 𝒩𝒶𝓂𝑒 🎀 🍒`;
}

window.onload = typeWriter;