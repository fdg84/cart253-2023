/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

let rx = 100;
let ry = 100;
let rw = 100;
let rh = 100;

let chain;

function preload() {
    chain = loadSound('assets/sounds/chainpad.wav');
}

function setup() {
    createCanvas (displayWidth, displayHeight);
}

function draw() {
    background (15, 122, 177);

    if(chain.isPlaying()) {
        noStroke();
        fill(255, 0 , 0);
        rw += 3;
        rh += 3
    } else {
        noStroke();
        fill(255);
        rw = 100;
        rh = 100;
    }
        rect(rx, ry, rw, rh);
}

    function mousePressed() {
        if(mouseX > rx && mouseX < rx + rw &&
            mouseY > ry && mouseY < ry + rh) {
                chain.play();
            }
    }
