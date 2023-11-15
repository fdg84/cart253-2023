class Ball {

    // The constructor() sets up a Acne's properties
    constructor(x, y, radius) {
      // Position and size information
      this.x = x;
      this.y = y;
      this.radius = 25;
      this.animate = false;
      this.maxRadius = 50;
      this.minRadius = 25;
      
      this.isGrowing = false
      this.isShrinking = false
      //const dotSize = random(size * .005, size * 1); // DOT SIZES
    
    
      //   this.size = size;
    //   this.maxSize = size; 
    //   this.zitThickness = 1;
    //   this.acneThickness = 0.2;
    //   this.maxAcneThickness = 5; 
    //   this.acneColor = acneColor;
    //   this.centreColor = {
    //     r: 220,
    //     g: 43,
    //     b: 142
    //   };
    //   this.alive = true;
    }
  
    
    // Acne growth
    // soothe() {
    //   // Choose a random amount to shrink
    //   let growth = random(0, 5);
    //   // Reduce the acne thickness (divide by 10 to make it less rapid)
    //   this.acneThickness = this.acneThickness - growth / 10;
    //   // Reduce the centre of the Acne
    //   this.size = this.size - growth;
  
    //   // If any of the key properties reach 2 or less, the Acne is dead
    //   if (this.acneThickness <= 2 || this.size <= 2) {
    //     this.alive = false;
    //   }
    // }
  
    // // soothe() the Acne shrinks
    // shrink() {
    //   // Choose a random amount to grow
    //   let shrinkage = random(0, 1);
    //   // Increase the acne thickness (divide by 10 to make it less rapid)
    //   this.acneThickness = this.acneThickness + shrinkage / 40;
    //   // Increase the centre of the Acne
    //   this.size = this.size + shrinkage;
  
    //   // Constrain the elements
    //   this.acneThickness = constrain(this.acneThickness, 0, this.maxAcneThickness);
    //   this.size = constrain(this.size, 0, this.maxSize);
    // }
  
    // display()
    // Displays the Acne on the canvas
    display() {
      push();
      // Set the stroke weight for the acnes and the stem
      //strokeWeight(this.zitThickness);
      // Draw a circle with a heavy outline for the Acne
      //strokeWeight(this.acneThickness);
      //fill(this.centreColor.r, this.centreColor.g, this.centreColor.b);
      //stroke(this.acneColor.r, this.acneColor.g, this.acneColor.b);
      if(this.animate){
        fill(255,0,0)
      }else{
        fill(255,255,255)
      }

      if (this.isGrowing){
        this.radius++;   
      }

      if (this.isShrinking){
        this.radius--;   
      }

      if(this.radius > this.maxRadius){
        this.isGrowing = false
        this.isShrinking = true
      }

      if(this.radius < this.minRadius){
        this.isGrowing = false
        this.isShrinking = false
      }

      ellipse(this.x, this.y, this.radius);
      pop();
    }
  }