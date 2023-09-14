/**
 * ALIEN
 * Francis Ouellette
 * 
 * Drawing an Alien
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

    createCanvas(640, 480);

    background(255, 155, 22);
    noStroke();

    //draw body
    fill(122);
    ellipse(320, 480, 300, 200);

    // draw head
    fill(100);
    ellipse(320, 240, 250, 400);

    // draw eyes
    fill(0);
    ellipse(250, 240, 80, 160);
    ellipse(390, 240, 80, 160);

     // draw nostrils
     fill(0);
     ellipse(300, 350, 10, 10);
     ellipse(340, 350, 10, 10);

    // draw mouth
    stroke(200, 0, 0);
    strokeWeight(4);
    rectMode(CENTER);
    rect(320, 390, 100, 15);
     
}


/**
 * Description of draw()
*/
function draw() {

}