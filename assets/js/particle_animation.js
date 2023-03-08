const leftParticles = [];
const rightParticles = [];
const html = document.documentElement;
const body = document.body;
const contentWidth = document.getElementsByClassName("wrapper")[0].clientWidth;
const epsilon = 1;
const page_height = document.body.scrollHeight;
const min_width = 1.3 * contentWidth;

let scroll_height = Math.max(body.scrollHeight, body.offsetHeight,
  html.clientHeight, html.scrollHeight, html.offsetHeight);
let particlesNumber = Math.floor(scroll_height / 50);
particlesNumber = particlesNumber > 10 ? particlesNumber : 10;
let particle_colour;
let line_colour;


let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
p5.disableFriendlyErrors = true;

function setup() {
  const canvas = createCanvas(windowWidth, scroll_height);
  centerCanvas(canvas);
  canvas.style('z-index', '-1');
  createParticles();
  smooth();
  // frameRate(60);

  dark_mode_active = window.matchMedia('(prefers-color-scheme: dark)').matches;
  particle_colour = dark_mode_active ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)';
  line_colour = dark_mode_active ? 'rgba(255,255,255,0.3)' : 'rgba(1,1,1,0.4)';
}

function centerCanvas(canvas) {
  var x = (windowWidth - width) / 2;
  var y = (scroll_height - height) / 2 + 82;
  resizeCanvas(windowWidth, scroll_height - 82);
  canvas.position(x, y);
}


function createParticles() {
  particlesNumber = Math.floor(scroll_height / 50);
  for (let i = 0; i < particlesNumber / 2; i++) {
    leftParticles.push(new Particle('Left'));
    rightParticles.push(new Particle('Right'));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, page_height);
  centerCanvas();
}

function draw() {
  clear();
  if (windowWidth >= min_width) {
    leftParticles.forEach((p, index) => {
      p.update();
      p.place();
      p.addConnectingLines(leftParticles.slice(index));
      p.relocateParticles();
    });
    rightParticles.forEach((p, index) => {
      p.update();
      p.place();
      p.addConnectingLines(rightParticles.slice(index));
      p.relocateParticles();
    });
  }
};


class Particle {
  constructor(leftOrRight) {
    // Position
    this.side = leftOrRight;
    if (this.side == 'Left') {
      this.pos = createVector(random((window.innerWidth - contentWidth) / 2), random(height));
    } else {
      this.pos = createVector(window.innerWidth - random((window.innerWidth - contentWidth) / 2), random(height));
    }
    this.size = 15;
    // Velocity
    this.vel = createVector(random(-1, 1), random(-1, 1));
  }

  place() {
    noStroke()
    fill(particle_colour);
    circle(this.pos.x, this.pos.y, this.size);
  }

  update() {
    this.pos.add(this.vel);
    this.reflectAtEdges();
  }

  reflectAtEdges() {
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

  addConnectingLines(particles) {
    particles.forEach(particle => {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      strokeWeight(1);
      stroke(line_colour);
      if (d < 60) {
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