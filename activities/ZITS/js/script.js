/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * ++++!
 */

"use strict";

// Our face
let face = {
  // An array to store the individual flowers
  flowers: [],
  // How many flowers in the face
  numFlowers: 20,
  // An array to our the bees
  bees: [],
  // How many bees in the face
  numBees: 5,
  // The color of the grass (background)
  grassColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup() creates the canvas and the flowers in the face
function setup() {
  createCanvas(600, 600);

  // Create our flowers by counting up to the number of the flowers
  for (let i = 0; i < face.numFlowers; i++) {
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
    // Create a new flower using the arguments
    let flower = new Acne(x, y, size, stemLength, petalColor);
    // Add the flower to the array of flowers
    face.flowers.push(flower);
  }

  // Create our bees by counting up to the number of bees
  for (let i = 0; i < face.numBees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    // Create a new bee using the arguments
    let bee = new Cream(x, y);
    // Add the bee to the array of bees
    face.bees.push(bee);
  }

}

// draw()
// Displays our flowers
function draw() {
  // Display the grass
  background(face.grassColor.r, face.grassColor.g, face.grassColor.b);

  // Loop through all the flowers in the array and display them
  for (let i = 0; i < face.flowers.length; i++) {
    let flower = face.flowers[i];
    // Check if this flower is alive
    if (flower.alive) {
      // Update the flower by shrinking it and displaying it
      flower.shrink();
      flower.display();
    }
  }

  // Loop through all the bees in the array and display them
  for (let i = 0; i < face.bees.length; i++) {
    let bee = face.bees[i];
    // Check if this flower is alive
    if (bee.alive) {
      // Shrink and move the bee
      bee.shrink();
      bee.move();

      // NEW! Go through the entire flower array and try to pollinate the flowers!
      // Note that we use j in our for-loop here because we're already inside
      // a for-loop using i!
      for (let j = 0; j < face.flowers.length; j++) {
        let flower = face.flowers[j];
        bee.tryToPollinate(flower);
      }

      // Display the bee
      bee.display();
    }
  }

}