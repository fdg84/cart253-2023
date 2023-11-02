class Cream {

  constructor(x, y) {
    this.x = random(250,550);
    this.y = random(250,550);
    this.size = 40;
    this.minSize = 1; // If we get smaller than this minimum we're dead
    this.maxSize = 40; // We can't get bigger than this
    this.vx = 0;
    this.vy = 0;
    this.speed = 2;
    this.growRate = 1; // How much the Cream grows if it soothes
    this.shrinkRate = 0.03; // How much smaller we get each frame
    this.jitteriness = 0.1; // How likely the Cream is to change direction
    this.alive = true; // The Cream starts out alive!
  }

  // shrink() causes the Cream to get smaller over time
  shrink() {
    // Shrink by reducing the size by a set amount
    this.size = this.size - this.shrinkRate;
    // Check if we're smaller than the minimum size
    if (this.size < this.minSize) {
      // If so, we're dead
      this.alive = false;
    }
  }

  // tryToSoothe() attempts to soothe the acne provided as a parameter
  // If soothing succeeds (the two overlap) then both grow
  tryToSoothe(acne) {
    // Calculate the distance between the Cream and the acne
    let d = dist(this.x, this.y, acne.x, acne.y);
    // If they overlap...
    if (d < this.size / 2 + acne.size / 2) {
      // The Cream should grow
      // Notice how we can call OTHER METHODS of the Cream by using "this"
      // So this.grow() calls the grow() method for THIS Cream
      this.grow();
      // The acne should react to being soothed so we call its method
      // that handles that!
      acne.soothe();
    }
  }

  // grow() causes the Cream to get bigger up to a maximum (called by tryToSoothe())
  grow() {
    // Grow by increasing the size by a set amount
    this.size = this.size + this.growRate;
    // Constrain the growth to a maximum
    this.size = constrain(this.size, 0, this.maxSize);
  }

  // move() moves the Cream by potentially changing direction
  // and then changing position based on velocity
  move() {
    // First check if we should change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // Constrain to the canvas (guess it's a walled garden!)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  // display() draws our Cream onto the canvas
  display() {
    // Body
    push();
    fill(0, 100, 255);
    noStroke();
    ellipse(this.x, this.y, this.size);
    pop();

  }
}