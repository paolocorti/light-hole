// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var ParticleSystem = function(position) {
	this.origin = position.get();
	this.particles = [];
};

ParticleSystem.prototype.addParticle = function(number, image) {
	for (i = 0; i < number; i++) {
    this.particles.push(new Particle(this.origin, image));
  }
};

ParticleSystem.prototype.run = function() {
	for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
  }
};

// A function to apply a force to all Particles
ParticleSystem.prototype.applyForce = function(f) {
  for(var i = 0; i < this.particles.length; i++){
    this.particles[i].applyForce(f);
  }
};

ParticleSystem.prototype.applyRepeller = function(r) {
  for(var i = 0; i < this.particles.length; i++){
    var p = this.particles[i];
    var force = r.attract(p);
    p.applyForce(force);
  }
};

ParticleSystem.prototype.addHole = function(h,r) {
  for(var i = 0; i < this.particles.length; i++){
    var p = this.particles[i];
    // var force = r.repel(p);
    // p.applyForce(force);
    if(h.isInside(p,true)){
      var force = r.attract(p);
      p.applyForce(force);
    }
    if (h.isInside(p,false)) {
        p.kill();
        // if (p.isDead()) {
        //   this.particles.splice(i, 1);
        // }
    }
  }
};