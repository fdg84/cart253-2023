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

    background(0, 110, 115);
    noStroke();

    //draw body
    fill(0, 180, 0);
    ellipse(320, 480, 300, 200);

    // draw head
    fill(0, 250, 0);
    ellipse(320, 240, 250, 400);

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

    // draw eyes
    noStroke();
    fill(random(0, 255));
    ellipse(250, 240, 80, 160);
    ellipse(390, 240, 80, 160);
    fill(20);
    ellipse(250, 240, 60, 90);
    ellipse(390, 240, 60, 90);
    fill(40);
    ellipse(250, 240, 40, 70);
    ellipse(390, 240, 40, 70);
    fill(60);
    ellipse(250, 240, 20, 50);
    ellipse(390, 240, 20, 50);

}