class Ball {

    // The constructor() sets up a Acne's properties
    constructor(x, y, radius, row, col, sound) {
      // Position and size information
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.animate = false;
      this.maxRadius = 50;
      this.minRadius = 25;
      this.row = row;
      this.col = col;
      this.isGrowing = false
      this.isShrinking = false
      console.log('my sound', sound)
      this.sound = sound;
    }
    
    // Displays the Acne on the canvas
    display() {
       push();
        if (this.isGrowing){
            this.radius++;   
        }

        if (this.isShrinking){
            this.radius--;   
        }

        if(this.radius >= this.maxRadius && this.isGrowing){
            this.isGrowing = false
            this.isShrinking = true
            this.radius = this.maxRadius
        }

        if(this.radius <= this.minRadius && this.isShrinking){
            this.isGrowing = false
            this.isShrinking = false
            this.radius = this.minRadius
        }

        if(this.animate && this.sound.isPlaying()) {
            fill(255,0,0);
        } else {
            fill(255,255,255)
            this.animate = false;
        }

       ellipse(this.x, this.y, this.radius);
       pop();
    }
  }