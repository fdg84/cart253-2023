/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

function preload() {

}

let circle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 4,
  }
  
  let titleString = "Life & Love";
  let endingString = "Goodbye";
  
  let state = `title`; // We start in the title state
  
  function setup() {
    createCanvas(500, 500);
    circle.vx = circle.speed;
  
    // Text settings
    textSize(32);
    textAlign(CENTER, CENTER);
  }
  
  function draw() {
    background(0);
  
    if (state === `title`) {
      // In the title state we display the title
      fill(255);
      text(titleString, width / 2, height / 2);
    }
    else if (state === `animation`) {
      // In the animation state we animate the circle
      circle.x = circle.x + circle.vx;
      circle.y = circle.y + circle.vy;
  
      ellipse(circle.x, circle.y, circle.size);
  
      // NEW!
      // And we change to the ending state if the circle reaches the right side
      if (circle.x > width) {
        state = `ending`;
      }
    }
    else if (state === `ending`) {
      // In the ending state we display the ending
      fill(255, 0, 0);
      text(endingString, width / 2, height / 2)
    }
  }
  
  // NEW!
  function keyPressed() {
    // If any key is pressed, we check if the current state is the title state
    if (state === `title`) {
      // If it is, we switch to the animation state
      state = `animation`;
    }
  }