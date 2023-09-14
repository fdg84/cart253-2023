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


/**
 * Description of setup
*/
function setup() {

createCanvas(windowWidth, windowHeight);
//createCanvas(500, 500);

}


/**
 * Description of draw()
*/
function draw() {

    // mute background if you want a trail of squares
    
    background(255, 0, 0);
    //background(mouseX, mouseY, 0);
    rectMode(CENTER);
    //rect(250, 250, 100, 100);
    //rect(mouseX, mouseY, 100, 100);
    //rect(250, 250, mouseX, mouseY);
    rect(width / 2, height / 2, 100, 100);

    


}