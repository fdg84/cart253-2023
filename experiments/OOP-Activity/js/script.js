/**
 * NEW
 * Francis Ouellette
 * 
 * PADDLE!
 */

"use strict";

let paddle;

function setup() {
    createCanvas(windowWidth,windowHeight);

    paddle = new Paddle(300,20);
}

function draw() {
    background(0);

    paddle.move();
    paddle.display();

}