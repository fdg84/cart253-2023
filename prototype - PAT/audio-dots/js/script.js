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

let kick;
const balls = []
const radius = 25;
let clickedBall

function preload() {
    kick = loadSound('assets/sounds/kick1.wav');
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

      const ball = new Ball(x, y, radius);
      balls.push(ball)
    }
  }

}

function draw() {
    background (15, 122, 177);

    if(kick.isPlaying()) {
        console.log("CLICKED BALL", clickedBall)
        //noStroke();
        // fill(255, 0 , 0, 50); // ALPHA LAYER (OPACITY)
        if (clickedBall) {
            clickedBall.animate = true
        }
        //fill(255, 0 , 0); 
        //rw += 50; // GROWTH SPEED
        //rh += 50
    } else {
        
        if (clickedBall) {
            clickedBall.animate = false
        }
        
        
        // noStroke();
        // // fill(255, 255, 255, 50); // ALPHA
        // fill(255, 255, 255);
        // rw = 70; // CIRCLE SIZE
        // rh = 70;
    }

        let hoverBall = balls.filter(ball => {
            if (mouseX < (ball.x + ball.radius) && mouseX > (ball.x - ball.radius) && mouseY < (ball.y + ball.radius) && mouseY > (ball.y - ball.radius)){
                return ball;
            }
        })[0]

        if(hoverBall){
            hoverBall.hoverAnimate = true
            hoverBall.isGrowing = true
        }

       for (let i = 0; i < balls.length; i++){
         balls[i].display()  
       } 
       //ellipse(rx, ry, rw, rh);
}

    function mousePressed(e) {
        console.log('mouse', e)
        clickedBall = balls.filter(ball => {
            if (mouseX < (ball.x + ball.radius) && mouseX > (ball.x - ball.radius) && mouseY < (ball.y + ball.radius) && mouseY > (ball.y - ball.radius)){
                return ball;
            }
        })[0]

        console.log("I CLICKED ON A BALL ", clickedBall)
        if (clickedBall){
            kick.play()
            //ball.sound.play()
        }
        // if(mouseX > rx && mouseX < rx + rw &&

        //     mouseY > ry && mouseY < ry + rh) {
        //         kick.play();
        //     }
    }
