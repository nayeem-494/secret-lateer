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
  document.getElementById("secretText").innerText = ` ɪɴ ᴇɴɢʟɪꜱʜ ᴡᴇ ꜱᴀʏ ɪ ᴄʜᴏꜱᴇ ʏᴏᴜ ɪɴ ᴘᴏᴇᴛʀʏ ᴡᴇ ꜱᴀʏ ɢɪᴠᴇ ᴍᴇ ᴀ ᴛʜᴏᴜꜱᴀɴᴅ ᴏꜰ ᴄʜᴏɪᴄᴇꜱ ᴀɴᴅ ᴍʏ ʜᴇᴀʀᴛ ᴡɪʟʟ ꜱᴛɪʟʟ ᴋɴᴏᴡ ʏᴏᴜʀ ɴᴀᴍᴇ`;
}

window.onload = typeWriter;
