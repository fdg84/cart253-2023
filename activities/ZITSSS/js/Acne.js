class Acne {

  // The constructor() sets up a Acne's properties
  constructor(x, y, size, acneColor) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.maxSize = size; 
    this.zitThickness = 1;
    this.acneThickness = 0.5;
    this.maxAcneThickness = 5; 
    this.acneColor = acneColor;
    this.centreColor = {
      r: 255,
      g: 0,
      b: 0
    };
    this.alive = true;
  }

    // shrink() MUST GROW!!!
  // Shrinks the Acne
  soothe() {
    // Choose a random amount to shrink
    let growth = random(0, 0,5);
    // Reduce the acne thickness (divide by 10 to make it less rapid)
    this.acneThickness = this.acneThickness - growth / 10;
    // Reduce the centre of the Acne
    this.size = this.size - growth;

    // If any of the key properties reach 2 or less, the Acne is dead
    if (this.acneThickness <= 2 || this.size <= 2) {
      this.alive = false;
    }
  }

  // NEW! soothe() handles the Acne being soothed (it grows) REVERSE!!!
  shrink() {
    // Choose a random amount to grow
    let shrinkage = random(0, 1);
    // Increase the acne thickness (divide by 10 to make it less rapid)
    this.acneThickness = this.acneThickness + shrinkage / 40;
    // Increase the centre of the Acne
    this.size = this.size + shrinkage;

    // Constrain the elements
    this.acneThickness = constrain(this.acneThickness, 0, this.maxAcneThickness);
    this.size = constrain(this.size, 0, this.maxSize);
  }

  // display()
  // Displays the Acne on the canvas
  display() {
    push();
    // Set the stroke weight for the acnes and the stem
    strokeWeight(this.zitThickness);
    // Draw a circle with a heavy outline for the Acne
    strokeWeight(this.acneThickness);
    fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
    stroke(this.acneColor.r, this.acneColor.g, this.acneColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}