/**
 * Audio Movement
 * FRANCIS OUELLETTE    
 * Prototype Test
 */

"use strict";

let bellsSFX, reverb;

function preload() {
  bellsSFX = loadSound(`assets/sounds/bellsfx.wav`);
}

let bg = 0;
let bgCanvas = (700);
let size;
let circle = 0;

function setup() {
    // createCanvas(displayWidth, displayHeight);
    createCanvas(bgCanvas, bgCanvas);
    userStartAudio();

    reverb = new p5.Reverb();
    bellsSFX.disconnect();
    reverb.process(bellsSFX, 20, 2);
    // delay = new p5.Delay();
    // delay.process(bellsSFX, 0.12, .7, 2300);
}

function draw() {

let dryWet = constrain(map(mouseX, 0.5, width, 0, 1), 0, 1);
reverb.drywet(dryWet);

background(0, 100, mouseY);

textSize(200);
  fill('white');
  text('CLICK', 50, 170);

circle = map(mouseX, 0, width, 255, 0);
size = constrain(mouseX, 0, width);
strokeWeight(40);
stroke(0, 50, 100, 0);
fill(circle, 250, 0);
ellipse(width/2, height/2, size);

circle = map(mouseX, 0, width, 200, 0);
size = constrain(mouseX, 0, width);
strokeWeight(40);
stroke(0, 50, 100, 0);
fill(circle, 200, 0);
ellipse(width/2, height/2, size/1.4);

circle = map(mouseX, 0, width, 200, 0);
size = constrain(mouseX, 0, width);
strokeWeight(40);
stroke(0, 50, 100, 0);
fill(circle, 150, 0);
ellipse(width/2, height/2, size/2);

circle = map(mouseX, 0, width, 200, 0);
size = constrain(mouseX, 0, width);
strokeWeight(40);
stroke(0, 50, 100, 0);
fill(circle, 100, 0);
ellipse(width/2, height/2, size/3);

circle = map(mouseX, 0, width, 200, 0);
size = constrain(mouseX, 0, width);
strokeWeight(40);
stroke(0, 50, 100, 0);
fill(circle, 50, 0);
ellipse(width/2, height/2, size/5);

let newRate = map(mouseX, 0, width, -3, 3);
bellsSFX.rate(newRate);

rectMode(CENTER);
fill(255);
rect(350, 350, 10, mouseX);

rectMode(CENTER);
fill(255);
rect(350, 350, mouseY, 10);
}

function mousePressed() {
  bellsSFX.loop();
}