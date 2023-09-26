/**
 * Conditionals - Images
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

// let clownImage;
let clown = {
    x: 250,
    y: 250,
    size: 100,
    image: undefined
}

function preload() {
// clownImage = loadImage("C:/Users/T450s/Documents/GitHub/cart253-2023/experiments/Conditionals_Images/assets/images/clown.png")
clownImage = loadImage("assets/images/clown.png")

}

function setup() {
createCanvas(500,500);
}

function draw() {
background(0);

// imageMode(CENTER);
// image(clownImage,mouseX,mouseY);

clown.x = mouseX;
clown.y = mouseY;

imageMode(CENTER);
image(clown.image,clown.x,clown.y,clown.size,clown.size);
}

function mousePressed() {
    clown.size = clown.size + 50;
    
}