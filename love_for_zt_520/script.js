
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.querySelector('.hearts').appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 300);
