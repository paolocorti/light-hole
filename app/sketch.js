// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ps;
var repeller;
var particleImg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ps = new ParticleSystem(createVector(windowWidth/2, 50));

  particleImg = loadImage("images/particle2.png");
  console.log(particleImg);
  ps.addParticle(300,particleImg);
  hole = new Hole(windowWidth/2, windowHeight/2);
  repeller = new Repeller(windowWidth/2, windowHeight/2);
}

function draw() {
  //blendMode('ADD');
  background(30);

  // Apply gravity force to all Particles
  var gravity = createVector(0,0.05);
  //ps.applyForce(gravity);
  hole.display();
  ps.run();
  ps.addHole(hole,repeller);
  //ps.applyRepeller(repeller)
}
