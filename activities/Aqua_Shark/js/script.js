/**
 * Shark Attack
 * Francis Ouellette
 */

"use strict"; 

let school = [];
let schoolSize = 4;

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
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2
  };
  return fish;
}


  
  function draw() {
    background(0);

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
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }
  
  function mousePressed() {
    let fish = createFish(mouseX,mouseY);
    school.push(fish);
  }
