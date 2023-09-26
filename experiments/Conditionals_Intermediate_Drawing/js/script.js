/**
 * Conditionals - Intermediate Drawing
 * Francis Ouellette
 * 
 * New test!
 */

"use strict";

let angle = 0;

function setup() {
createCanvas(500,500);
}

function draw() {
background(155);

// push();
// fill(255,0,0);
// stroke(0,255,255);
// strokeWeight(10);
// rect(100,100,100,100);
// pop();

// push();
// fill(0,0,255);
// stroke(0);
// strokeWeight(1);
// rect(300,100,100,100)
// pop();

    // push();
    // fill(255,0,0);
    // rect(0,0,100,100);
    // pop();

    // push();
    // translate(200,100);
    // fill(0,255,0);
    // rect(0,0,100,100);
    // pop();

    // push();
    // translate(0,200);
    // fill(0,0,255);
    // rect(0,0,100,100);
    // pop();

    push();
    fill(100,0,0);
    rectMode(CENTER);
    translate(width/2,height/2);
    rotate(angle);
    // scale(rectScale);
    rect(0,0,100,100);
    pop();

    angle = angle + 0.05;

    // rectScale = rectScale + 0.01;
}
