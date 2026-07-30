function showMessage() {
    const msg = document.getElementById("message");
    msg.classList.remove("hidden");

    // Play celebration effect
    document.getElementById("title").innerHTML = "🎉🎂 Happy Birthday! 🎂🎉";

    // Confetti using emojis
    for (let i = 0; i < 40; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.innerHTML = ["🎉", "✨", "🎊", "💖"][Math.floor(Math.random() * 4)];
    confetti.style.position = "absolute";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-30px";
    confetti.style.fontSize = (20 + Math.random() * 20) + "px";
    confetti.style.animation = "fall 3s linear forwards";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
    from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    to {
        transform: translateY(100vh) rotate(720deg);
        opacity: 0;
    }
}`;
document.head.appendChild(style);