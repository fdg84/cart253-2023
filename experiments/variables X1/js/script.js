/**
 * I LIKE TO MOVE IT
 * Francis Ouellette
 * 
 * NEW EXERCISE
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}



let backgroundShade = 0;

let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 2
}

/**
 * Description of setup
*/
function setup() {

createCanvas(500, 500);

}


/**
 * Description of draw()
*/
function draw() {

    // muted background to make a trail of squares

 //   background(255, 0, 0);
    //background(mouseX, mouseY, 0);
    rectMode(CENTER);
    rect(20, 20, 10, 10);
    rect(mouseX, mouseY, 10, 10);
    rect(250, 250, mouseX, mouseY);
    rect(width / 2, height / 2, 100, 100);


 //backgroundShade = backgroundShade + 0.5;
 //background(backgroundShade);
 //circleSize = circleSize + 1;
 //circleY = circleY - 1;
 //circleX += circleSpeed;
 //circleSpeed -= circleAcceleration;
 //ellipse(circleX, circleY, circleSize);


//background(backgroundShade);
//circle.x = circle.x + circle.speed;
//ellipse(circle.x, circle.y, circle.size);


}