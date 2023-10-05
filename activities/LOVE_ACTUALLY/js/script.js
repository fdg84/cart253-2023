/**
 * New Activity
 * Francis Ouellette
 * 
 * Love Actually!
 */

"use strict";

function preload() {

}

let circle1 = {
    x: 550,
    y: 150,
    vx: 0,
    vy: 0,
    speed: 5,
    size: 100
  }

let circle = {
    x: 750,
    y: 350,
    vx: 0,
    vy: 0,
    speed: 5,
    size: 100
  }
  
  function setup() {
    createCanvas(1500, 700);
  }
  
  function draw() {
    background(255,0,0);
  
    // horizontal movement
    // left arrow
    if (keyIsDown(LEFT_ARROW)) {
      // x velocity negative
      circle.vx = -circle.speed;
    }
    // right arrow
    else if (keyIsDown(RIGHT_ARROW)) {
      // x velocity positive
      circle.vx = circle.speed;
    }
    // neither pressed
    else {
      // x velocity stop moving 
      circle.vx = 0;
    }
  
    // vertical movement UP DOWN keys
    if (keyIsDown(UP_ARROW)) {
      circle.vy = -circle.speed;
    }
    else if (keyIsDown(DOWN_ARROW)) {
      circle.vy = circle.speed;
    }
    else {
      circle.vy = 0;
    }
  
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  
    ellipse(circle.x, circle.y, circle.size);

      // Choose random velocities within the "speed limit"
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  ellipse(circle1.x, circle1.y, circle1.size);
}
