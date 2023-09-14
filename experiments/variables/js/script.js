/**
 * Variables
 * Francis Ouellette
 * 
 * Variables class test
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


// declare variable
//let backgroundShade = 0;
//let circleX = 0;
//let circleY = 250;
//let circleSize = 100;
//let circleSpeed = 2;
//let circleAcceleration = 0.25;

// variables video 3.4
//replace variables with property values

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

//createCanvas(windowWidth, windowHeight);
createCanvas(500, 500);

}


/**
 * Description of draw()
*/
function draw() {

// variables video 3.1
    // mute background if you want a trail of squares

 //   background(255, 0, 0);
    //background(mouseX, mouseY, 0);
 //   rectMode(CENTER);
    //rect(250, 250, 100, 100);
    //rect(mouseX, mouseY, 100, 100);
    //rect(250, 250, mouseX, mouseY);
 //   rect(width / 2, height / 2, 100, 100);


 // variables video 3.2
 // variables video 3.3
 //backgroundShade = backgroundShade + 0.5;
 //background(backgroundShade);
 //circleSize = circleSize + 1;
 //circleY = circleY - 1;
 //circleX += circleSpeed;
 //circleSpeed -= circleAcceleration;
 //ellipse(circleX, circleY, circleSize);

  // variables video 3.4
    background(backgroundShade);
    circle.x = circle.x + circle.speed;
    ellipse(circle.x, circle.y, circle.size);




}