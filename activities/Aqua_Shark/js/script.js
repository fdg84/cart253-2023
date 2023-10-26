/**
 * Shark Attack
 * Francis Ouellette
 */

"use strict"; 

let school = [];
let schoolSize = 1;

let fishImage;
let sharkImage;

function preload() {
    fishImage = loadImage('assets/images/fish.png');
    sharkImage = loadImage('assets/images/shark.png');
}

let sharky = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 15,
    fill: 255
  };
  
  let user = {
    x: 250,
    y: 250,
    size: 10,
    fill: 255
  };

  let timer = 20

  //defining a variable to store the number of clicks
  var clicks = 0;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < schoolSize; i++) {
      let fish = createFish(random(0, width), random(0, height));
      school.push(fish);
    }
  
    sharky.y = random(0, height);
    sharky.vx = sharky.speed;
  
    noCursor();
  }

  function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 20,
    vx: 0,
    vy: 0,
    speed: 5
  };
  return fish;
}

  function draw() {
    background(0, 0, 30);

    // timer 
    textAlign(CENTER, CENTER);
    textSize(200);
    text(timer, width/2, height/2);

    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer == 0) {
      text("GAME OVER", width/2, height*0.7);
    }

    textSize(16);
    text('- LAY AS MANY EGGS AS POSSIBLE -', 0, 40, width);

    // counter
    noStroke();
    fill(255, 0, 0);
    textSize(100);
    textAlign(CENTER, BOTTOM);
    //displaying number of clicks
    text(clicks, width/2, height/2);

    // stars attributes
    push();
    translate(width * 0.4, height * 0.2);
    rotate(frameCount / -100.0);
    fill(0, 150, 150);
    noStroke();
    star(0, 0, 30, 70, 5);
    pop();

    push();
    translate(width * 0.3, height * 0.7);
    rotate(frameCount / -120.0);
    fill(0, 100, 200);
    noStroke();
    star(0, 0, 30, 70, 5);
    pop();

    push();
    translate(width * 0.8, height * 0.4);
    rotate(frameCount / -130.0);
    fill(0, 100, 150);
    noStroke();
    star(0, 0, 30, 70, 5);
    pop();

    push();
    translate(width * 0.6, height * 0.8);
    rotate(frameCount / -150.0);
    fill(0, 0, 150);
    noStroke();
    star(0, 0, 30, 70, 5);
    pop();

    push();
    translate(width * 0.1, height * 0.4);
    rotate(frameCount / -170.0);
    fill(0, 50, 100);
    noStroke();
    star(0, 0, 30, 70, 5);
    pop();

    // school

    for (let i = 0; i < school.length; i++) {
      moveFish(school[i]);
      displayFish(school[i]);
  }
  
    // sharky movement
    sharky.x = sharky.x + sharky.vx;
    sharky.y = sharky.y + sharky.vy;
  
    if (sharky.x > width) {
        sharky.x = 0;
        sharky.y = random(0, height);
    }
  
    // User movement
    user.x = mouseX;
    user.y = mouseY;
  
    // Check for catching sharky
    let d = dist(user.x, user.y, sharky.x, sharky.y);
    if (d < sharky.size / 2 + user.size / 2) {
        noLoop();
    }
  
    // Display sharky 
    fill(sharky.fill.r, sharky.fill.g, sharky.fill.b);
    ellipse(sharky.x, sharky.y, sharky.size);
  
    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);

    imageMode(CENTER);
    image(fishImage,mouseX,mouseY,100,100);

    imageMode(CENTER);
    image(sharkImage,sharky.x,sharky.y,350,250);
  } 

  function moveFish(fish) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fish.vx = random(-fish.speed, fish.speed);
      fish.vy = random(-fish.speed, fish.speed);
    }
  
      // Move the fish
      fish.x = fish.x + fish.vx;
      fish.y = fish.y + fish.vy;
  
      // Constrain the fish to the canvas
      fish.x = constrain(fish.x, 0, width);
      fish.y = constrain(fish.y, 0, height);
  }
  
  // displayFish(fish)
  // Displays the provided fish on the canvas
  function displayFish(fish) {
    push();
    fill(200, 100, 0);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }
  
  function mousePressed() {
    let fish = createFish(mouseX,mouseY);
    school.push(fish);
  }

  // star shape
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
      }
      endShape(CLOSE);
  }

  //function is called when user clicks
  function mouseClicked() {
  //add 1 to variable clicks
  clicks ++;
}
