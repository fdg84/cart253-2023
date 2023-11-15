/**
 * Audio Dots
 * Francis Ouellette
 * 
 * Help File:
 * https://www.youtube.com/watch?v=W-y4zEppsWg
 */

"use strict";

let rx = 100;
let ry = 100;
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
        fill(255, 0 , 0);
        rw += 30;
        rh += 30
    } else {
        noStroke();
        fill(255);
        rw = 100;
        rh = 100;
    }
        ellipse(rx, ry, rw, rh);
}

    function mousePressed() {
        if(mouseX > rx && mouseX < rx + rw &&
            mouseY > ry && mouseY < ry + rh) {
                kick.play();
            }
    }
