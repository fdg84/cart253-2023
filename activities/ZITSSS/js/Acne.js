class Acne {

  // The constructor() sets up a Acne's properties
  constructor(x, y, size, petalColor) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = size; 
    this.stemThickness = 0;
    this.petalThickness = 1;
    this.maxPetalThickness = 10; 
    this.petalColor = petalColor;
    this.centreColor = {
      r: 255,
      g: 0,
      b: 0
    };
    this.alive = true;
  }

  // shrink()
  // Shrinks the Acne
  shrink() {
    // Choose a random amount to shrink
    let shrinkage = random(0, 0.1);
    // Reduce the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness - shrinkage / 5;
    // Reduce the centre of the Acne
    this.size = this.size - shrinkage;

    // If any of the key properties reach 0 or less, the Acne is dead
    if (this.petalThickness <= 0 || this.size <= 0) {
      this.alive = false;
    }
  }

  // NEW! soothe() handles the Acne being soothed (it grows)
  soothe() {
    // Choose a random amount to grow
    let growth = random(0, 0.5);
    // Increase the petal thickness (divide by 10 to make it less rapid)
    this.petalThickness = this.petalThickness + growth / 5;
    // Increase the centre of the Acne
    this.size = this.size + growth;

    // Constrain the elements
    this.petalThickness = constrain(this.petalThickness, 0, this.maxPetalThickness);
    this.size = constrain(this.size, 0, this.maxSize);
  }

  // display()
  // Displays the Acne on the canvas
  display() {
    push();
    // Set the stroke weight for the petals and the stem
    strokeWeight(this.stemThickness);
    // Draw a circle with a heavy outline for the Acne
    strokeWeight(this.petalThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.petalColor.r, this.petalColor.g, this.petalColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}