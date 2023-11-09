/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

let bellsSFX;

function preload() {
  bellsSFX = loadSound(`assets/sounds/bellsfx.wav`);
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
}

function mousePressed() {
  bellsSFX.play();
}