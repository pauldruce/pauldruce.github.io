const particles = [];
var canvas;
let contentWidth = 1000;
let kappa_0 = 8.9875517923e9; // Nm^2 C^{-2} - value taken from Wikipedia Oct 2020
let grav_const = 6.67e-11; // N m^2 kg^{-2} - value is well known
let e_charge = 1e-19 // magnitude of the charge of an electron
let m_e = 9.11e-31 // mass of electron
// Necessary function for p5js to work.
function setup() {
  let p5js_width = contentWidth;
  let p5js_height = contentWidth / 2;

  let x_budge = width / 5;
  // let y_budge = p5js_height;

  // Sliders are not constrained to be within the canvas. So we need to absolute position them. This is a little annoying really.
  let mass_1_slider = addSlider(createSlider(0, 100 * m_e, 1 * m_e, 1 * m_e), "Mass 1"); // Mass slider value is in units of kilograms

  canvas = createCanvas(p5js_width, p5js_height);
  canvas.parent("p5js-anim");

  let charge_1 = 1 * e_charge; // Charge is in units of Coulombs
  let mass_1 = mass_1_slider.value(); // Mass is in units of kilograms
  let pos_x_1 = p5js_width / 2 - x_budge;
  let pos_y_1 = p5js_height / 2;


  let charge_2 = -1 * e_charge; // Charge is in units of Coulombs
  let mass_2 = 1; // * m_e; // Mass is in units of kilograms
  let pos_x_2 = p5js_width / 2 + x_budge;
  let pos_y_2 = p5js_height / 2;

  // The plus one or minus one is to account for the radial unit vector for each particle.
  particles.push(new Particle(pos_x_1, pos_y_1, charge_1, mass_1, +1));
  particles.push(new Particle(pos_x_2, pos_y_2, charge_2, mass_2, -1));
}

// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   canvas.position(x, y);
// }


function draw() {
  background('rgb (55,100,144)');
  particles.forEach((p, index) => {
    p.update();
    p.place();
    p.forces(particles);
  })
}

class Particle {
  constructor(pos_x, pos_y, charge, mass, rad_dir) {
    // Position
    this.pos = createVector(pos_x, pos_y);
    this.size = 20;
    // Velocity
    this.vel = createVector(0, 0);
    this.charge = charge;
    this.mass = mass;
    this.rad_dir = rad_dir;
  }
  place() {
    noStroke();
    fill('rgba(0,0,0,0.5)');
    fill('red')
    circle(this.pos.x, this.pos.y, this.size);
    fill('black')
    textAlign(CENTER);
    text("m=" + str(this.mass.toPrecision(4)) + "kg\n v=" + str(this.vel.x.toPrecision(4)) + " ms^{-1}", this.pos.x, this.pos.y + 2 * this.size)

  }
  update() {
    this.pos.add(this.vel);
  }
  forces(particles) {
    particles.forEach(particle => {
      const r = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y); // Get the radial distance between particles
      this.e_acceleration = this.rad_dir * kappa_0 * this.charge * particle.charge / (r * r * this.mass);
      this.g_acceleration = this.rad_dir * grav_const * particle.mass / (r * r);
      this.accel = this.e_acceleration - this.g_acceleration;
      this.vel.add(this.accel);
    })
    const r_sep = dist(particles[0].pos.x, particles[0].pos.y, particles[1].pos.x, particles[1].pos.y)
    text("Separation = " + str(r_sep.toPrecision(4)) + " m", width / 2, height);
  }
}


function addSlider(S, text) {
  S.parent(window.document.getElementById('sliders-holder'))
  S.attribute("value", S.value())
  S.attribute("text", text)
  S.input(updateSliders);
  return S;
}

function updateSliders() {
  this.attribute("value", this.value())
  if (this.attribute("text") == "Mass 1") {
    B.setX(0, this.attribute("value"))
  } else if (this.attribute("text") == "Charge 1") {
    B.setX(1, this.attribute("value"))
  } else if (this.attribute("text") == "Velocity 1") {
    B.setV(0, this.attribute("value"))
  } else if (this.attribute("text") == "Mass 2") {
    B.setV(1, this.attribute("value"))
  } else if (this.attribute("text") == "Charge 2") {
    B.setM(0, this.attribute("value"))
  } else if (this.attribute("text") == "Velocity 2") {
    B.setM(1, this.attribute("value"))
  }
  // buff1.background(C1)
  // buff2.background(C1)
  B.bH = [0, 0];
  B.wH = [0, 0];
}