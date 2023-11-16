/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test File:
 * https://www.youtube.com/watch?app=desktop&v=ktPnruyC6cc&ab_channel=ColorfulCoding
 */

"use strict";

function preload() {

}

function setup() {
    createCanvas (displayWidth, displayHeight);
    angleMode(DEGREES)
    rectMode(CENTER)

}

function draw() {
    background (52, 66, 244);
    noFill()
    stroke(255)

    translate(width / 2, height / 2)
    for (var i = 0; i < 200; i++){
        push()
        rotate(sin(frameCount + i / 2) * 100)
        rect(0, 0, 600 - i * 3, 600 - i * 3, 200 - i)
        pop()
    }

}