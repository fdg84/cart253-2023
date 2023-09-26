/**
 * Conditionals
 * Francis Ouellette
 * 
 * New test project!
 */

"use strict";


function preload() {
}

let backgroundShade = 0;
let circle = {
    x: 0,
    y: 250,
    size: 100,
    speed: 1
}

function setup() {
    createCanvas(500,500);
}

function draw() {
    background(backgroundShade);

    circle.x = circle.x + circle.speed;

// 4.1 VIDEO

    if (circle.x > width) {
        circle.speed = -circle.speed;
    }
    if (circle.x < 0) {
        circle.speed = -circle.speed;
    }
    if (mouseY < height/2) {
        fill(255,0,0);
    }
    if (mouseY > height/2) {
        fill(0,0,255);
    }

// 4.2 VIDEO

    // if (mouseX < width/3) {
    //     fill(255,0,0);
    // }
    // else if (mouseX < 2 * width/3) {
    //     fill(0,255,0);
    // }
    // else {
    //     fill(0,0,255);
    // }

            // fill(255,255,255);

            // if (circle.x > width/3 && circle.x < 2 * width/3) {
            // fill(255,0,0);
            //     }
            // }


    ellipse(circle.x,circle.y,circle.size);

}


// other equations >= <= === !== (relational operators)
//// && and || or ! not 

