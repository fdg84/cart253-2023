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

    parallels(100,100);
    parallels(50,50);
  }

  function parallels(x,y) {
    let x = 50;
    let y = 250;
    for (let i = 0; i < 20; i++) {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x,y,2,50);
        x = x + 5;
    }
  }