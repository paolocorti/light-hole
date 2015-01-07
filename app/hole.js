var Hole = function(x, y) {
  this.power = 1;
  this.position = createVector(x, y);
  this.radius = 40;
  this.energy = 0;
};

Hole.prototype.display = function() {
  fill(30);
  stroke(80);
  ellipse(this.position.x, this.position.y, this.getRingSize(), this.getRingSize())
  fill(255, 34, 86,(this.energy));

  noStroke();
  ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
};

Hole.prototype.isInside = function(p, ring){
  var rX = this.position.x;
  var rY = this.position.y;
  var radius;
  if (ring) {
    radius = this.getRingSize()
  } else {
    radius = this.radius;
  };

  var pos = p.position;

  if (Math.pow(pos.x - rX,2) + Math.pow(pos.y - rY,2) < (Math.pow(radius,2) +5)) {
    if (!ring) {
      this.addEnergy();
    }
    return true;
  } else {
    return false;
  }
};

Hole.prototype.getRingSize = function(p){
  return 120;
};

Hole.prototype.addEnergy = function(){
  this.energy += 5; 
};

