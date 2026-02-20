let modeBtn = document.getElementById("toggleMode");
let body = document.body;
let bgm = document.getElementById("bgm");
let musicBtn = document.getElementById("musicBtn");

// Dark / Light mode
modeBtn.onclick = () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  modeBtn.innerText = body.classList.contains("dark") ? "🌙 Dark Mode" : "☀️ Light Mode";
};

// Play / Pause Music
function toggleMusic() {
  if (bgm.paused) {
    bgm.play();
    musicBtn.innerText = "⏸️ Pause Music";
  } else {
    bgm.pause();
    musicBtn.innerText = "▶️ Play Music";
  }
}

// Surprise (simple popup – chaho to confetti JS laga denge)
function launchConfetti() {
  alert("🎊 Surprise! Happy Birthday Aashish 🎉");
}

// Slideshow
let photos = ["photo1.jpg", "photo2.jpg", "photo3.jpeg","photo4.jpeg","photo5.jpeg","photo6.jpeg"];
let idx = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  idx = (idx + 1) % photos.length;
  slide.classList.add("fade");
  setTimeout(() => {
    slide.src = photos[idx];
    slide.classList.remove("fade");
  }, 300);
}, 2500);