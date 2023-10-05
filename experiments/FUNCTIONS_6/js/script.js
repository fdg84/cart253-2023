/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

function preload() {

}

let bg = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bg);
}

// keyPressed() is called whenever a key is pressed!
function keyPressed() {
  // Set out bg variable to a random number
  bg = random(0, 255);
}