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
let redCircle = 0;

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

background(0, 0, 0);
redCircle = map(mouseX, 0, width, 255, 200);
size = constrain(mouseX, 0, width);
stroke(200, 50, 100, 100);
fill(redCircle, 50, 100);
ellipse(width/2, height/2, size);

}