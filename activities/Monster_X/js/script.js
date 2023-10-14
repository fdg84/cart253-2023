/**
 * Monster REMIX - PLANETS
 * Francis Ouellette
 */

"use strict"; 

let earthImage;
let ufoImage;

function preload() {
    earthImage = loadImage('assets/images/earth.png');
    ufoImage = loadImage('assets/images/ufo.png');
}

let earth = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    // speed: 5,
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
  
    earth.y = random(0, height);
    // earth.vx = earth.speed;
  
    noCursor();
  }
  
  function draw() {
    background(0);


    // edit here to add floating text when floating on planets
    let i = 0;
    while(i <= 10){
        print("i is:" + i);
        ellipse(random(width), random(height), 100);
        i = i+1;
    }
    print("!!!!!");

    if(mouseX > earth.x){
        background(0, 0, 0);
    }
  
    // // earth movement
    // earth.x = earth.x + earth.vx;
    // earth.y = earth.y + earth.vy;
  
    // if (earth.x > width) {
    //     earth.x = 0;
    //     earth.y = random(0, height);
    // }
  
    // User movement
    user.x = mouseX;
    user.y = mouseY;
  
    // // Check for catching earth
    // let d = dist(user.x, user.y, earth.x, earth.y);
    // if (d < earth.size / 2 + user.size / 2) {
    //   noLoop();
    // }
  
    // Display earth 
    fill(earth.fill.r, earth.fill.g, earth.fill.b);
    ellipse(earth.x, earth.y, earth.size);
  
    // Display user
    fill(user.fill);
    ellipse(user.x, user.y, user.size);

    imageMode(CENTER);
    image(ufoImage,mouseX,mouseY,150,150);

    imageMode(CENTER);
    image(earthImage,earth.x,earth.y,150,150);
  } 

