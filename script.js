// Corazones flotando
for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "🤍";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "22px";
    heart.style.opacity = "0.8";
    heart.style.animation = `floatUp ${6 + Math.random() * 6}s linear infinite`;
    document.body.appendChild(heart);
}

// Animación de corazones
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    from {
        transform: translateY(0) scale(1);
    }
    to {
        transform: translateY(-120vh) scale(1.5);
    }
}
`;
document.head.appendChild(style);
