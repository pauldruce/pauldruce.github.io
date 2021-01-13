const particles = [];
var canvas;
let contentWidth = 1000;
let min_width = 1.3 * contentWidth;
let epsilon = 1;
let page_height = document.documentElement.scrollHeight;
// let windowWidth = document.width;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  canvas.style('z-index', '-1');
  createParticles(particles);
}

function createParticles(particles) {
  const particlesLength = Math.floor(page_height / 10);
  for (let i = 0; i < particlesLength; i++) {
    particles.push(new Particle());
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  centerCanvas();
}

function draw() {
  background('rgb (55,100,144)'); // The command "background" clears the canvas.

  /*
    This if statement then only draws the particles if the screen is large enough.
    This makes the website 'responsive to sizes'.
  */
  if (windowWidth >= min_width) {
    particles.forEach((p, index) => {
      p.update();
      p.place();
      p.checkParticles(particles.slice(index));
      p.relocateParticles();
    })
  }
}

class Particle {
  constructor() {
    // Position
    let plusOrMinus = random() < 0.5 ? -1 : 1;
    if (plusOrMinus < 0) {
      this.pos = createVector(random((window.innerWidth - contentWidth) / 2), random(height));
    } else {
      this.pos = createVector(window.innerWidth - random((window.innerWidth - contentWidth) / 2), random(height));
    }
    this.size = 15;
    // Velocity
    this.vel = createVector(random(-1, 1), random(-1, 1));
  }
  place() {
    noStroke();
    fill('rgba(0,0,0,0.5)');
    circle(this.pos.x, this.pos.y, this.size);
  }
  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  edges() {
    if (this.pos.x < width / 2) {
      if (this.pos.x < 0 || this.pos.x > (window.innerWidth - contentWidth) / 2) {
        this.vel.x *= -1;
      }
    } else {
      if (this.pos.x < (window.innerWidth - (window.innerWidth - contentWidth) / 2) || this.pos.x > window.innerWidth)
        this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      stroke('rgba(0,0,0,0.4)');
      strokeWeight(1);
      if (d < 120) {
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }

  relocateParticles() {
    let midLeftBorder = (window.innerWidth - contentWidth) / 2;
    let midRightBorder = window.innerWidth - ((window.innerWidth - contentWidth) / 2);
    if (this.pos.x < width / 2) {
      if (this.pos.x < 0) {
        this.pos.x = this.pos.x + (dist(this.pos.x, this.pos.y, 0, this.pos.y) + epsilon);
      }
      if (this.pos.x > midLeftBorder) {
        this.pos.x = this.pos.x - (dist(this.pos.x, this.pos.y, midLeftBorder, this.pos.y) + epsilon);
      }
    }
    if (this.pos.x > width / 2) {
      if (this.pos.x < midRightBorder) {
        this.pos.x = this.pos.x + (dist(this.pos.x, this.pos.y, midRightBorder, this.pos.y) + epsilon);
      }
      if (this.pos.x > window.innerWidth) {
        this.pos.x = this.pos.x - (dist(this.pos.x, this.pos.y, window.innerWidth, this.pos.y) + epsilon)
      }
    }
  }
}