/**
 * Monster Dodge
 * Francis Ouellette
 */

"use strict"; 

let faceImage;
let wormImage;

function preload() {
    faceImage = loadImage('assets/images/face.png');
    wormImage = loadImage('assets/images/worm.png');
}

let monster = {
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
    size: 1,
    fill: 255
  };
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
  
    monster.y = random(0, height);
    monster.vx = monster.speed;
  
    noCursor();
  }
  
  function draw() {
    background(0);

    let i = 0;
    while(i <= 10){
        print("i is:" + i);
        ellipse(random(width), random(height), 100);
        i = i+1;
    }
    print("!!!!!");

    if(mouseX > monster.x){
        background(255, 0, 0);
    }
  
    // monster movement
    monster.x = monster.x + monster.vx;
    monster.y = monster.y + monster.vy;
  
    if (monster.x > width) {
        monster.x = 0;
        monster.y = random(0, height);
    }
  
    // User movement
    user.x = mouseX;
    user.y = mouseY;
  
    // Check for catching monster
    let d = dist(user.x, user.y, monster.x, monster.y);
    if (d < monster.size / 2 + user.size / 2) {
      noLoop();
    }
  
    // Display monster 
    fill(monster.fill.r, monster.fill.g, monster.fill.b);
    ellipse(monster.x, monster.y, monster.size);
  
    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);

    imageMode(CENTER);
    image(wormImage,mouseX,mouseY,250,250);

    imageMode(CENTER);
    image(faceImage,monster.x,monster.y,350,350);
  } 

