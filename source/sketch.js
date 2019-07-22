let p;
const PARTICLE_COUNT = 3000;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    p = new ParticleSystem(PARTICLE_COUNT);
}

function draw() {
    background(0);
    p.draw();

    fill(255);
    text(int(getFrameRate()), 0, 10);
    text(PARTICLE_COUNT, 0, 25);
}

