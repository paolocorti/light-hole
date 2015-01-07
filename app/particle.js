var Particle = function(position, img) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(random(-0.4, 0.4), random(-0.4, 0.4));
  this.position = this.initPosition();
  this.lifespan = 100.0;
  this.caught = false;
  
  var perlin = new toxi.math.noise.PerlinNoise();
  this.noise = perlin.noise(0, 100);

  this.img = img;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.applyForce = function(f) {
  this.acceleration.add(f);
};

Particle.prototype.initPosition = function() {
  var x = random(0, windowWidth);
  var y = random(0, windowHeight);
  if ((x > ((windowWidth/2)-40) && x < ((windowWidth/2)+40)) && (y > ((windowHeight/2)-40) && y < ((windowHeight/2)+40) ) ) {
    if (x > ((windowWidth/2)-40) && x < ((windowWidth/2)+40)) {
      x = random(0, ((windowWidth/2)-40));
    }
    if (y > ((windowHeight/2)-40) && y < ((windowHeight/2)+40)){
      y = random(((windowHeight/2)-40), windowHeight);
    }
  }
  return createVector(x, y);
};


// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration.mult(this.noise));
  this.position.add(this.velocity);

  this.checkEdges();
};

// Method to display
Particle.prototype.display = function() {
  // noStroke();
  // if (this.caught) {
  //   fill(255,255,255, 200);
  //   ellipse(this.position.x, this.position.y, 3, 3);
  // } else{
  //   fill(255, 34, 86);
  //   ellipse(this.position.x, this.position.y, 5, 5);
  // }
  imageMode('CENTER')
  image(this.img,this.position.x, this.position.y);
};

// Method to kill particle
Particle.prototype.kill = function(){
  //this.lifespan = 0;
  this.velocity.mult(-1);
  this.caught = true;
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan <= 0.0) {
    return true;
  } else {
    return false;
  }
};

Particle.prototype.checkEdges = function() {
  if (this.position.x > windowWidth) {
    this.position.x = windowWidth;
    this.velocity.x *= -1;
  } else if (this.position.x < 0) {
    this.velocity.x *= -1;
    this.position.x = 0;
  }
  if (this.position.y > windowHeight) {
    this.velocity.y *= -1;
    this.position.y = windowHeight;
  } else if (this.position.y < 0) {
    this.velocity.y *= -1;
    this.position.y = 0;
  }
};
