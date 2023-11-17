/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * https://editor.p5js.org/re7l/sketches/9V5oj6A1M 
 */

"use strict";

let content = 'WELCOME TO THE INFINITE SCROLL '; 
let yStart = 0; 


function preload() {
}

function setup() {
  createCanvas(400, 400);
  textFont(`Tilt Warp`)
  textAlign(CENTER, CENTER); 
  textSize(20); 
}

function draw() {
  background(0);
  for (let y = yStart; y < height; y += 28) { 
    fill(255, y / 2 + 55, 100); 
    text(content, width / 2, y); 
  }
  yStart--; 
}