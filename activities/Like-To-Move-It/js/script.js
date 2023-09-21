/**
 * I LIKE TO MOVE IT
 * Francis Ouellette
 * 
 * NEW EXERCISE!
 */

"use strict";

/**
 * Description of preload
*/
function preload() {

}

let bg = {
    r: 0,
    g: 0,
    b: 0
};

let circle1 = {
    x: 250,
    y: 250,
    size: 10,
    growthRate: 5,
    speed: 2,
    fill: 255,
    alpha: 200
};

let circle2 = {
    x: 400,
    y: 250,
    size: 5,
    sizeRatio: 0.75,
    speed: -2,
    fill: 255,
    alpha: 200
};


/**
 * Description of setup
*/
function setup() {

    createCanvas(500,500);
    noStroke();

    
}


/**
 * Description of draw()
*/
function draw() {

    // background
    background(bg.r,bg.g,bg.b);
    bg.b = map(circle1.size,10,width,0,255);

    // circle1
    circle1.x = circle1.x + circle1.speed;
    circle1.size = circle1.size + circle1.growthRate;
    fill(circle1.fill,circle1.alpha);
    ellipse(circle1.x,circle1.y,circle1.size);

    // circle2
    circle2.x = circle2.x + circle2.speed;
    circle2.size = circle1.size * circle2.sizeRatio;
    fill(circle2.fill,circle2.alpha);
    ellipse(circle2.x,circle2.y,circle2.size);



}