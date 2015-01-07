var Repeller = function(x, y) {
  this.power = 0.01;
  this.position = createVector(x, y);
  this.radius = 40;
};

Repeller.prototype.display = function() {
  stroke(60);
  strokeWeight(1);
  fill(40);
  ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
};

Repeller.prototype.attract = function(p) {
  var dir = p5.Vector.sub(this.position, p.position); // Calculate direction of force
  var d = dir.mag();                                // Distance between objects
  dir.normalize();                                  // Normalize vector (distance doesn't matter here, we just want this vector for direction)
  d = constrain(d, 1, 100);                         // Keep distance within a reasonable range
  var force = this.power/ (d * d);             // Repelling force is inversely proportional to distance
  dir.mult(force);                                  // Get force vector --> magnitude * direction
  return dir;
};