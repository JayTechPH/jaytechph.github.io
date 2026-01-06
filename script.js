const bgMusic = document.getElementById("bgMusic");
const musicIcon = document.getElementById("musicIcon");
const musicButton = document.getElementById("musicButton");
const dialogue = document.getElementById("dialogue");
const dialogueText = document.getElementById("dialogue-text");
const contact = document.getElementById("contact");
const frame = document.getElementById("frame");
const achievement = document.getElementById("achievement");
let isMuted = true;

document.body.addEventListener("click", () => {
    bgMusic.muted = false;
    isMuted = false;
    musicIcon.src = "img/music.png";
    bgMusic.play();
}, { once: true });

document.body.addEventListener("click", () => {
    dialogue.style.display = "none";
    frame.style.display = "none";
    contact.style.display = "none";
    achievement.style.display = "none";
});

  // toggle mute on click
musicButton.addEventListener("click", () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  musicIcon.src = isMuted ? "img/music_mute.png" : "img/music.png";
});

// hover effect
musicButton.addEventListener("mouseenter", () => {
  musicIcon.src = isMuted ? "img/music_mute_hover.png" : "img/music_hover.png";
});

musicButton.addEventListener("mouseleave", () => {
  musicIcon.src = isMuted ? "img/music_mute.png" : "img/music.png";
});

function showDialogue(text) {
    dialogueText.textContent = text;
    dialogue.style.display = "block";
    scroll();
}

function catClicked() {
    event.stopPropagation();
    showDialogue("Meow! Meow!");
}

function deskClicked() {
    event.stopPropagation();
    showDialogue("Hello! I’m Ar Jay Pangilinan, a BSIS student with a growing passion for technology. I’ve been learning and building my skills, and I enjoy exploring different areas of tech. I’m always looking for ways to improve and challenge myself. Happy to connect, share ideas, or collaborate on projects!");
}

function closeClicked(element) {
    element.parentElement.style.display = "none";
}

function telephoneClicked() {
    event.stopPropagation();
    contact.style.display = "block";
    showDialogue("Ring! Ring! Hello, this is Ar Jay Pangilinan. How can I help you today?");
}

async function bookshelfClicked() {
    const res = await fetch("https://f-api.ir/api/facts/random");
    const data = await res.json();
    showDialogue(`Fun Fact: ${data.fact}`);
}

function imageClicked() {
    event.stopPropagation();
    frame.style.display = "block";
    showDialogue("Ahhh… I can feel it still — the wind, the speed, the thrill. That moment was pure adventure.");
}

function achievementClicked() {
    event.stopPropagation();
    achievement.style.display = "block";
    showDialogue("Here’s what I’ve accomplished so far");
}

async function windowClicked() {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    showDialogue(`Quote: ${data.quote}`);
}

function scroll() {
    window.scrollTo({
        top: document.body.scrollHeight,
    });
}