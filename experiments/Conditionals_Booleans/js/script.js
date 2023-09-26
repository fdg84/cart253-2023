/**
 * Conditionals - Booleans
 * Francis Ouellette
 * 
 * New tests!
 */

"use strict";

function preload() {
}

// let displayCircle = false;

let caterpillar = {
    x: 100,
    y: 250,
    segmentSize: 50
}

function setup() {
    createCanvas(500,500);
}


function draw() {

// 4.3 VIDEO

// keyIsPressed
    // if (mouseIsPressed) {
    //     background(200);
    // }
    // else {
    //     background(0);  
    // }

//     background(0);

// if (mouseIsPressed) {
//     displayCircle = true;
// }

// if (displayCircle) {
//     ellipse(250,250,100,100);
// }

// 4.4 VIDEO

background(0);
noStroke();
fill(100,200,100);

// let x = caterpillar.x;
// let numSegments = 5;
// let segmentsDrawn = 0;

// while (segmentsDrawn < numSegments) {
//     ellipse(x,caterpillar.y,caterpillar.segmentSize);
//     x = x + 40;
//     segmentsDrawn++;
//  // segmentsDrawn += 1;
// }

let x = caterpillar.x;
let numSegments = 10;

    // segmentsDrawn = i

for (let i = 0; i < numSegments; i++) {
    ellipse(x,caterpillar.y,caterpillar.segmentSize);
    x = x + 40;
}

// 4.5 VIDEO

}

