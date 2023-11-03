/**
 * ZITS - HEAL THE ACNE!
 * Francis Ouellette
 * 
 * Face Design
 * https://codepen.io/jgog/pen/ammXQL
 */

"use strict";

let titleString = "Soothe The Acne\nClick To Start";
let zitEndingString = "Goodbye Zits";
let creamEndingString = "Try Again";
let zitsDead, creamDead

let state = `title`; // We start in the title state

// Our face
let face = {
  // An array to store the individual acne
  acne: [],
  // How much acne in the face
  numAcne: 10,
  // An array of creams
  creams: [],
  // How much cream in the face
  numCreams: 5,
 // The color of the background
  imageColor: {
  r: 206,
  g: 255,
  b: 10
}
};

// setup() creates the canvas and the acne in the face
function setup() {
  createCanvas(800, 800);

  // Create our acne by counting up to the number of acne
  for (let i = 0; i < face.numAcne; i++) {
    // Create variables for arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(10, 50);
    let acneLength = random(50, 100);
    let zitColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create new acne using the arguments
    let acne = new Acne(x, y, size, acneLength, zitColor);
    // Add the acne to the array of acne
    face.acne.push(acne);
  }

  // Create creams by counting up to the number of creams
  for (let i = 0; i < face.numCreams; i++) {
    // Create variables for arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new cream using the arguments
    let cream = new Cream(x, y);
    // Add the cream to the array of creams
    face.creams.push(cream);
  }
}


// draw()
// Displays our acne
function draw() {
  // Display the background
  background(face.imageColor.r, face.imageColor.g, face.imageColor.b);

// draw() executes over and over once setup() has executed
  var skin = color('#465956');
  noStroke();
  ellipseMode(CENTER);

  // face
  noStroke();
  fill(skin);
  ellipse(width/2, height/2, 500, 600);

  fill(skin);
  ellipse(150, 410, 50, 100);
  ellipse(650, 410, 50, 100);

  
  if (state === `title`) {
    // In the title state we display the title
    fill(100,100,200);
    text(titleString, 0, 250, width);
    textSize(100);
    strokeWeight(0.5);
    textAlign(CENTER, TOP);

  } else if (state === `animation`) {
      // In the animation state we animate the Acne
    // Loop through all the acne in the array and display them
    zitsDead = true
    for (let i = 0; i < face.acne.length; i++) {
      let acne = face.acne[i];
      // Check if this acne is alive
      if (acne.alive) {
        // Update the acne by shrinking it and displaying it
        zitsDead = false
        acne.shrink();
        acne.display();
      }
    }
  // Loop through all the creams in the array and display them
    creamDead = true
    for (let i = 0; i < face.creams.length; i++) {
      let cream = face.creams[i];
      // Check if this acne is alive
      if (cream.alive) {
        // Shrink and move the cream
        cream.shrink();
        cream.move();
        creamDead = false
        // NEW! Go through the entire acne array and try to soothe the acne!
        // Note that we use j in our for-loop here because we're already inside
        // a for-loop using i!
        for (let j = 0; j < face.acne.length; j++) {
          let acne = face.acne[j];
          cream.tryToSoothe(acne);
        }
        // Display the cream
        cream.display();
          
      }
    }
  }

  if (zitsDead && state !== 'title' && state !== 'creamEnding'){
    console.log('z:', zitsDead, 'c:', creamDead)
    state = 'zitEnding'
  }

  if (creamDead && state !== 'title' && state !== 'zitEnding'){
    console.log('z:', zitsDead, 'c:', creamDead)
    state = 'creamEnding'
  }

  // nose
  noStroke();
  fill('#7d9692');
  beginShape();
  vertex(400, 425);
  vertex(400, 525);
  vertex(430, 500);
  endShape(CLOSE);
  
  // eyes
  fill('white');
  ellipse(300, 420, 50, 50);
  ellipse(500, 420, 50, 50);
  fill('#111');
  ellipse(300, 420, 15, 15);
  ellipse(500, 420, 15, 15);
  
  // eye brow
  stroke('#333');
  strokeWeight(5);
  noFill();
  arc(300, 420, 80, 80, PI+.9, -.9);
  arc(500, 420, 80, 80, PI+.9, -.9);
  
  // lips
  strokeWeight(20);
  stroke('#f28865');
  arc(400, 550, 150, 100, .9, PI-.9);
  noStroke();
  
  if (state === `zitEnding`) {
    // display the zit ending
    fill(150,200,250);
    text(zitEndingString, width / 2, height / 2);
    textSize(100);
    strokeWeight(0.5);
    textAlign(CENTER, TOP);
  }

  if (state === `creamEnding`) {
    // display the cream ending
    fill(255,0,0);
    text(creamEndingString, width / 2, height / 2);
    textSize(100);
    strokeWeight(0.5);
    textAlign(CENTER, TOP);
  }
}

function mousePressed() {
  // If any key is pressed, we check if the current state is the title state
  if (state === `title`) {
    // If it is, we switch to the animation state
    state = `animation`;
  }
}