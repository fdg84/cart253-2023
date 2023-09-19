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
    x: 250,
    y: 250,
    size: 100,
    speed: 1,
    fill: 0
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

    circle.speed = random(-5,5);
    circle.x = circle.x + circle.speed;
    circle.y = random(0,height);
    circle.size = random(10,100);

    circle.fill = random(0,255);
    fill(circle.fill);
    ellipse(circle.x, circle.y, circle.size);

    let randomNumber = random();
    console.log(randomNumber);

}