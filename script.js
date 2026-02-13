const intro = document.getElementById("intro");
const intro2 = document.getElementById("intro2");
const startBtn = document.getElementById("startBtn");
const main = document.querySelector(".main");
const outro = document.getElementById("outro");
const continueBtn = document.getElementById("continueBtn");

startBtn.addEventListener("click", () => {
	intro.style.display = "none";
	intro2.style.display = "block";
	main.style.display = "none";
});

continueBtn.addEventListener("click", () => {
	intro2.style.display = "none";
	main.style.display = "block";
});

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("click", moveButton);

function moveButton() {
	const randomX = Math.random() * (300 - noBtn.offsetWidth);
	const randomY = Math.random() * (300 - noBtn.offsetHeight);

	noBtn.style.left = randomX + "px";
	noBtn.style.top = randomY + "px";
}

yesBtn.addEventListener("click", function () {
	outro.style.display = "block";
	main.style.display = "none";
	confetti({
		particleCount: 1000,
		spread: 140,
		startVelocity: 40,
		scalar: 1.2,
		colors: ["#ff4c68", "#ffccd9", "#ffffff"],
	});
});

const music = new Audio("audio/romantic-music.mp3");

const playBtn = document.getElementById("playBtn");
playBtn.addEventListener("click", () => {
	if (music.paused) { // if audio is currently paused
		music.play();
		playBtn.textContent = "▶"; // show sound on
	} else { // if audio is playing
		music.pause();
		playBtn.textContent = "⏸"; // show muted
	}
});