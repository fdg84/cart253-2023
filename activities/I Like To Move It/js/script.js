/**
 * I LIKE TO MOVE IT!
 * FRANCIS OUELLETTE    
 * 
 * NEW EXERCISE
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let bg = 0;
let bgCanvas = 700;
let size;
let circle = 0;



/**
 * Description of setup
*/
function setup() {
    createCanvas(bgCanvas, bgCanvas);

}


/**
 * Description of draw()
*/
function draw() {

background(140, 100, mouseY);
circle = map(mouseX, 0, width, 255, 150);
size = constrain(mouseX, 0, width);
stroke(200, 50, 100, 100);
fill(circle, 150, 0);
ellipse(width/2, height/2, size);

fill(25);
triangle(250, mouseX, 400, mouseY, 150, 275);

fill(222, 222, 0)
quad(150, mouseX, 555, 250, 350, 138, mouseY, 150);

rectMode(CENTER);
fill(255);
rect(350, 350, 10, mouseX);

rectMode(CENTER);
fill(255);
rect(350, 350, mouseY, 10);

let x1 = map(mouseX, 0, width, 0, 700);
  ellipse(x1, 55, 55, 55);






}