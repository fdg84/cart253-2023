/**
 * Audio Dots
 * Francis Ouellette
 * 
 * Web Version:
 * https://www.youtube.com/watch?v=W-y4zEppsWg
 */

"use strict";

const balls = []
const radius = 50;
let clickedBall
const sounds = []
let reverb;

// ADD VOICE SNIPPETS TO SOUND BANK

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
    let bby = loadSound('assets/sounds/bby.wav');
    sounds.push(bby) 
    let clap = loadSound('assets/sounds/clap.wav');
    sounds.push(clap) 
    let clave = loadSound('assets/sounds/clave.wav');
    sounds.push(clave) 
    let hard = loadSound('assets/sounds/hard.wav');
    sounds.push(hard) 
    let hat = loadSound('assets/sounds/hat.wav');
    sounds.push(hat) 
    let hi = loadSound('assets/sounds/hi.wav');
    sounds.push(hi) 
    let kick02 = loadSound('assets/sounds/kick02.wav');
    sounds.push(kick02) 
    let laser = loadSound('assets/sounds/laser.wav');
    sounds.push(laser) 
    let lfo1 = loadSound('assets/sounds/lfo1.wav');
    sounds.push(lfo1) 
    let noise = loadSound('assets/sounds/noise.wav');
    sounds.push(noise) 
    let particle = loadSound('assets/sounds/particle.wav');
    sounds.push(particle)  
    let rise1 = loadSound('assets/sounds/rise1.wav');
    sounds.push(rise1) 
    let snare = loadSound('assets/sounds/snare.wav');
    sounds.push(snare) 
}

function setup() {
    createCanvas (displayWidth, displayHeight);
    userStartAudio();

    const columns = 20;
    const rows = 12;
    const cellWidth = width / columns;
    const cellHeight = height / rows;
    
    reverb = new p5.Reverb();
    
    for (let i = 0; i < sounds.length; i++){
        sounds[i].disconnect();
        reverb.process(sounds[i], 15, 2);
    }
    
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
    background (171, 250, 0);

    let dryWet = constrain(map(500, 0.3, Math.floor(Math.random() * 500), 0, 0.5), 0, 0.3);
    console.log(dryWet)
    reverb.drywet(dryWet);

    let hoverBall = balls.filter(ball => {
        if (mouseX < (ball.x + ball.clickRadius) && mouseX > (ball.x - ball.clickRadius) && mouseY < (ball.y + ball.clickRadius) && mouseY > (ball.y - ball.clickRadius)){
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

    rectMode(CORNER);
    fill(234, 121, 76);
    
    noStroke();
    rect(15, 100, 420, 700);

    rectMode(CORNER);
    fill(255);
    strokeWeight(20);
    stroke(72, 148, 156);

    // left ovals
    rect(10, 82, 40, 95, 20);
    rect(10, 178, 40, 50, 20);
    rect(10, 228, 40, 150, 20);
    rect(10, 378, 40, 100, 20);
    rect(10, 478, 40, 50, 20);
    rect(10, 528, 40, 50, 20);
    rect(10, 578, 40, 100, 20);
    rect(10, 678, 40, 144, 20);

    // right ovals
    rect(425, 82, 40, 140, 20);
    rect(425, 225, 40, 50, 20);
    rect(425, 275, 40, 50, 20);
    rect(425, 325, 40, 100, 20);
    rect(425, 425, 40, 100, 20);
    rect(425, 525, 40, 50, 20);
    rect(425, 575, 40, 100, 20);
    rect(425, 675, 40, 50, 20);
    rect(425, 725, 40, 96, 20);

    // top ovals
    rect(65, 83, 50, 40, 20);
    rect(115, 83, 50, 40, 20);
    rect(165, 83, 150, 40, 20);
    rect(315, 83, 100, 40, 20);


    // bottom ovals
    rect(65, 780, 150, 40, 20);
    rect(215, 780, 50, 40, 20);
    rect(265, 780, 100, 40, 20);
    rect(365, 780, 50, 40, 20);

    textFont(`Tilt Warp`)
    textSize(138);
    noStroke();
    fill(255);
    text('DOTS', 65, 472);

    textFont(`Space Grotesk`)
    textSize(20);
    noStroke();
    fill(255);
    text('Audio', 73, 367);
    
    textSize(20);
    noStroke();
    fill(255);
    text('Click & Play', 292, 497);

    textSize(12);
    noStroke();
    fill(255);
    text('Welcome to a fun & interactive sound experience!', 90, 165);
    
}

function mousePressed(e) {
    clickedBall = balls.filter(ball => {
        if (mouseX < (ball.x + ball.clickRadius) && mouseX > (ball.x - ball.clickRadius) && mouseY < (ball.y + ball.clickRadius) && mouseY > (ball.y - ball.clickRadius)){
            return ball;
        }
    })[0]

    console.log("I CLICKED ON A BALL", clickedBall)
    if (clickedBall){
        clickedBall.animate = true
        clickedBall.sound.play()
    }
}
