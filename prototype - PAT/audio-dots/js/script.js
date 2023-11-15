/**
 * Audio Dots
 * Francis Ouellette
 * 
 * Web Version:
 * https://www.youtube.com/watch?v=W-y4zEppsWg
 */

"use strict";



// let rx = 80; // CIRCLE POSITION
// let ry = 150;

// let rw = 100;
// let rh = 100;

const balls = []
const radius = 25;
let clickedBall
const sounds = []

function preload() {
    let kick = loadSound('assets/sounds/kick1.wav');
    sounds.push(kick)
    let kick2 = loadSound('assets/sounds/kick2.wav');
    sounds.push(kick2)
    let kick3 = loadSound('assets/sounds/kick3.wav');
    sounds.push(kick3)
    let click = loadSound('assets/sounds/click1.wav');
    sounds.push(click)
    let click2 = loadSound('assets/sounds/click2.wav');
    sounds.push(click2)
    let click3 = loadSound('assets/sounds/click3.wav');
    sounds.push(click3)
}

function setup() {
    createCanvas (displayWidth, displayHeight);
    const columns = 20;
    const rows = 12;
    const cellWidth = width / columns;
    const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;
      const soundIndex = Math.floor(Math.random() * sounds.length)  
      const ball = new Ball(x, y, radius, r, c, sounds[soundIndex]);
      balls.push(ball)
    }
  }

}

function draw() {
    background (15, 122, 177);

    let hoverBall = balls.filter(ball => {
        if (mouseX < (ball.x + ball.radius) && mouseX > (ball.x - ball.radius) && mouseY < (ball.y + ball.radius) && mouseY > (ball.y - ball.radius)){
            return ball;
        }
    })[0]

    if(hoverBall){
        hoverBall.isGrowing = true;
        hoverBall.isShrinking = false;
    }

    for (let i = 0; i < balls.length; i++){
        balls[i].display()  
    } 
}

function mousePressed(e) {
    clickedBall = balls.filter(ball => {
        if (mouseX < (ball.x + ball.radius) && mouseX > (ball.x - ball.radius) && mouseY < (ball.y + ball.radius) && mouseY > (ball.y - ball.radius)){
            return ball;
        }
    })[0]

    console.log("I CLICKED ON A BALL ", clickedBall)
    if (clickedBall){
        clickedBall.animate = true
        clickedBall.sound.play()
    }
}
