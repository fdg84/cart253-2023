/**
 * AUDIO
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
  createCanvas(600, 600);
  userStartAudio();
}

function draw() {
  background(0);
}

function mousePressed() {
  bellsSFX.rate(-1);
  bellsSFX.play();
}