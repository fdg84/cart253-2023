/**
 * Functions 2 Parameters
 * Francis Ouellette
 * 
 */

"use strict";

function preload() {

}

function setup() {
    createCanvas(500,500);
}

function draw() {
    background(0);

    parallels(100,100,5,4,100,5);
    parallels(50,50,10,6,33,7);
    parallels(200,200,20,5,77,22);
    parallels(311,257,7,2,55,55);
  }

  function parallels(x,y,numLines,lineWidth,lineHeight,lineSpacing) {
    // let x = 50;
    // let y = 250;
    for (let i = 0; i < numLines; i++) {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x,y,lineWidth,lineHeight);
        x = x + lineSpacing;
    }
  }