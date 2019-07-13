class Particle {
    constructor(origin) {
        this.o = origin; // particle origin
        this.v = createVector(0, 0); // particle velocity
    }

    update() {
        this.o.add(this.v);
    }

    draw() {
        this.update();
        point(this.o.x, this.o.y);
    }
}

class ParticleSystem {
    constructor(particleCount = 100) {
        this.part = new Array(particleCount);
        for (let i = 0; i < particleCount; i++)
            this.part[i] = new Particle(createVector(random(width), random(height)));
    }

    draw() {
        let attrPoint;
        const sw = mouseIsPressed;

        if (sw)
            attrPoint = createVector(mouseX, mouseY);
        for (let i = 0; i < this.part.length; i++) {
            if (sw) {
                this.part[i].v.add(p5.Vector
                    .sub(attrPoint, this.part[i].o)
                    .div(attrPoint.dist(this.part[i].o))
                    .mult(0.1));
            }
            stroke(i % 100 + 155);
            this.part[i].draw();
        }
    }
}

let p;
const PARTICLE_COUNT = 5000;

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

// let pause = false;
// function mousePressed() {
//   pause ? noLoop() : loop();
//   pause = !pause;
// }
