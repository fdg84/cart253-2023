/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * ++++!
 */

"use strict";

// Our face

let face = {
  // An array to store the individual acne
  acne: [],
  // How many acne in the face
  numAcne: 20,
  // An array to our the creams
  creams: [],
  // How many creams in the face
  numCreams: 5,

};

// setup() creates the canvas and the acne in the face
function setup() {
  createCanvas(600, 600);

  // Create our acne by counting up to the number of the acne
  for (let i = 0; i < face.numAcne; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let stemLength = random(50, 100);
    let petalColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new acne using the arguments
    let acne = new Acne(x, y, size, stemLength, petalColor);
    // Add the acne to the array of acne
    face.acne.push(acne);
  }

  // Create our creams by counting up to the number of creams
  for (let i = 0; i < face.numCreams; i++) {
    // Create variables for our arguments for clarity
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
  // // Display the grass
  // background(face.grassColor.r, face.grassColor.g, face.grassColor.b);

  // Loop through all the acne in the array and display them
  for (let i = 0; i < face.acne.length; i++) {
    let acne = face.acne[i];
    // Check if this acne is alive
    if (acne.alive) {
      // Update the acne by shrinking it and displaying it
      acne.shrink();
      acne.display();
    }
  }

  // Loop through all the creams in the array and display them
  for (let i = 0; i < face.creams.length; i++) {
    let cream = face.creams[i];
    // Check if this acne is alive
    if (cream.alive) {
      // Shrink and move the cream
      cream.shrink();
      cream.move();

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