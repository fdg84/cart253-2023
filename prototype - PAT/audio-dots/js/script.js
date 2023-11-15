/**
 * Audio Dots
 * Francis Ouellette
 * 
 * Web Version:
 * https://www.youtube.com/watch?v=W-y4zEppsWg
 */

"use strict";

let rx = 80; // CIRCLE POSITION
let ry = 150;

let rw = 100;
let rh = 100;

let kick;

function preload() {
    kick = loadSound('assets/sounds/kick1.wav');
}

function setup() {
    createCanvas (displayWidth, displayHeight);
}

function draw() {
    background (15, 122, 177);

    if(kick.isPlaying()) {
        noStroke();
        // fill(255, 0 , 0, 50); // ALPHA LAYER (OPACITY)
        fill(255, 0 , 0); 
        rw += 50; // GROWTH SPEED
        rh += 50
    } else {
        noStroke();
        // fill(255, 255, 255, 50); // ALPHA
        fill(255, 255, 255);
        rw = 70; // CIRCLE SIZE
        rh = 70;
    }
        ellipse(rx, ry, rw, rh);
}

    function mousePressed() {
        if(mouseX > rx && mouseX < rx + rw &&
            mouseY > ry && mouseY < ry + rh) {
                kick.play();
            }
    }
