/**
 * Variables X2 - random numbers
 * Francis Ouellette
 * 
 * variables - random numbers!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let backgroundShade = 0;
let circle = {
    //x: 250,
    x: 0,
    y: 250,
    size: 100,
    speed: 1,
    fill: 255
    //fill: 0
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
    background(backgroundShade);

    //circle.speed = random(-5,5);
    circle.x = circle.x + circle.speed;
    circle.x = constrain(circle.x,0,width);
    //circle.y = random(0,height);
    //circle.size = random(10,100);

    //circle.fill = random(0,255);

    circle.size = map(mouseY,0,height,10,500);
    //circle.size = map(mouseY,height,0,10,500);

    //circle.fill = map(circle,0,width,0,255);
    circle.fill = map(mouseX,0,width,0,255);

    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

    //let randomNumber = random();
    //console.log(randomNumber);

}