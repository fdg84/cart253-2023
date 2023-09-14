/**
 * Drawing Experiment
 * Francis Ouellette
 * 
 * New p5 drawing project!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {

    createCanvas(1000, 500);

// light gray color
    background(222, 222, 222);

// white circle w line
    stroke(33, 77,44);
    circle(460, 460, 450);

// pyramid w transparent blue
    rectMode(CENTER);
    fill(10, 20, 225, 10);
    rect(220, 220, 100, 100);
    fill(20, 20, 225, 20);
    rect(220, 220, 90, 90);
    fill(30, 20, 225, 30);
    rect(220, 220, 80, 80);
    fill(40, 20, 225, 40);
    rect(220, 220, 70, 70);
    fill(50, 20, 225, 50);
    rect(220, 220, 60, 60);

// purple cone
    noStroke();
    ellipseMode(CORNER);
    fill(107, 20, 225);
    ellipse(350, 350, 100, 100)
    fill(137, 20, 225);
    ellipse(350, 350, 80, 80)
    fill(157, 20, 225);
    ellipse(350, 350, 60, 60)
    

}


/**
 * Description of draw()
*/
function draw() {

}