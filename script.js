// Toggle Sidebar
const menuBtn = document.querySelector('.menu-btn');
const sideBar = document.getElementById('side-bar');

menuBtn.addEventListener('click', () => {
    sideBar.style.display = sideBar.style.display === 'block' ? 'none' : 'block';
});

// Bubbles Animation
const canvas = document.getElementById('bubbles');
const ctx = canvas.getContext('2d');
let bubbles = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Bubble {
    constructor() {
        this.x = random(0, canvas.width);
        this.y = random(canvas.height, canvas.height + 100);
        this.radius = random(10, 30);
        this.speed = random(1, 3);
    }

    update() {
        this.y -= this.speed;
        if (this.y < -this.radius) {
            this.y = canvas.height + this.radius;
            this.x = random(0, canvas.width);
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 215, 0, 0.5)';
        ctx.fill();
    }
}

function initBubbles() {
    bubbles = [];
    for (let i = 0; i < 100; i++) {
        bubbles.push(new Bubble());
    }
}

function animateBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let bubble of bubbles) {
        bubble.update();
        bubble.draw();
    }
    requestAnimationFrame(animateBubbles);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initBubbles();
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
initBubbles();
animateBubbles();
