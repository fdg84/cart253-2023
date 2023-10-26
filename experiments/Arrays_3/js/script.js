// /**
//  * TEMPLATE
//  * Francis Ouellette
//  * 
//  * Test!
//  */

// "use strict";

// // Our array of fortunes, each of which is a string
// // Note that we still use square brackets around the array,
// // but now we list the elements the array should start with
// // separated by commas.
// // As here, we can put each element on a separate line for clarity.
// let fortunes = [
//   `It's not looking great.`,
//   `You will trip over an apple today.`,
//   `Beware of over-friendly cats.`,
//   `Bank error in your favor, collect $200.`,
//   `Start your Korean skincare regime.`,
//   `You will feel better than 20 years ago.`,
//   `David Lynch will call you on your birthday.`,
//   `Happiness is just around the corner.`,
//   `You will make it look easy today.`,
//   `Your future is cloudy.`
// ];

// // We need a variable to store the chosen fortune so we can
// // display it in draw()
// let chosenFortune = `I am looking into your soul...`;

// // setup() gets basic styling ready
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   fill(255);
// }

// // draw() displays the current fortune
// function draw() {
//   background(0);
//   text(chosenFortune, width / 2, height / 2);
// }

// // mousePressed() chooses a random fortune from the fortunes array
// function mousePressed() {
//   // By passing the fortunes array as an argument to random() we get back
//   // a RANDOM ELEMENT in the array (one of the fortune strings) which we
//   // can then store in the chosenFortune variable for displaying
//   chosenFortune = random(fortunes);
// }

/////////////////////////////////////////////////

// "use strict";

// // Our array of lines from one of Hamlet's soliloquys (a sequence
// // where he essentially talks to himself). We will want to display
// // each line one after the other as the user clicks.
// let soliloquy = [
//   `To be, or not to be`,
//   `That is the question.`,
//   `Whether 'tis nobler in the mind`,
//   `To suffer the slings and arrows`,
//   `Of outrageous fortune`,
//   `Or to take arms`,
//   `Against a sea of sorrows`,
//   `And by opposing end them.`
// ];

// // We need a variable to store the current line we want to display
// // It should start at ZERO because that's the first index in the array
// let currentLine = 0;

// // setup() gets basic styling ready
// function setup() {
//   createCanvas(600, 600);
//   textAlign(CENTER, CENTER);
//   textSize(32);
//   fill(255);
// }

// // draw() displays the current line
// function draw() {
//   background(0);
//   // Get the element in the array at the CURRENT index (starts at 0 and goes up)
//   let dialog = soliloquy[currentLine];
//   // Display the string in that element on the canvas
//   text(dialog, width / 2, height / 2);
// }

// // mousePressed() moves to the next line in the soliloquy unless we've reached the end
// function mousePressed() {
//   // Go to the next line in the soliloquy
//   currentLine = currentLine + 1;
//   // Check if we've reached the LENGTH of the array
//   // If we have, we've gone past the end because we started counting at 0
//   // The LENGTH of our array is 8, but the final element is at index 7
//   if (currentLine === soliloquy.length) {
//     // If we've gone past the end, go back one to the last real element
//     currentLine = soliloquy.length - 1;
//   }
// }

/////////////////////////////////////////////////

// "use strict";

// let circle = {
//   x: 0,
//   y: 0,
//   size: 100,
//   trail: [], // Note that we are creating an EMPTY TRAIL ARRAY as a PROPERTY of the circle
//   trailSize: 20
// }

// // setup() the canvas ready
// function setup() {
//   createCanvas(600, 600);
// }

// // draw() draws a circle with a trails
// function draw() {
//   background(0);

//   // Use a for loop to go through each element in the circle's trail array in order
//   for (let i = 0; i < circle.trail.length; i++) {
//     // Get the element at the index indicated by i (0, then 1, then 2, etc.)
//     let element = circle.trail[i];
//     // Draw an ellipse the same size as the circle at that position
//     ellipse(element.x, element.y, circle.size);
//   }

//   // Move the circle to the mouse position
//   circle.x = mouseX;
//   circle.y = mouseY;

//   // Draw the circle
//   ellipse(circle.x, circle.y, circle.size);

//   // Create a new position object that stores where the circle is now
//   // which we can add to the trail to trace the path of the circle
//   let newTrailPosition = {
//     x: circle.x,
//     y: circle.y
//   };
//   // Add the position to the circle's trail array
//   circle.trail.push(newTrailPosition);

//   if (circle.trail.length > circle.trailSize) {
//     circle.trail.shift();
//   }
// }

/////////////////////////////////////////////////

// "use strict";

// // An array of different playback rates to use with our dog bark
// // 1 means normal rate, greater than one increases the speed and pitch
// // So 3 is three times faster with a correspondingly higher pitch.
// let rates = [1.5, 1.75, 2.25, 2.5, 2.75, 3];

// // Our sound effect
// let barkSFX;

// // preload() loads the barking sound effect
// function preload() {
//   barkSFX = loadSound(`assets/sounds/bark.wav`);
// }

// // setup() the canvas ready
// function setup() {
//   createCanvas(600, 600);
// }

// // draw() does nothing much
// function draw() {
//   background(0);
// }

// // mousePressed() plays a dog bark at a randomly chosen rate
// function mousePressed() {
//   // Choose a random rate from the array
//   let barkRate = random(rates);
//   // Set the barking sound effect to that rate
//   barkSFX.rate(barkRate);
//   // Play the barking sound effect
//   barkSFX.play();
// }

/////////////////////////////////////////////////

"use strict";

// An array to store our images
let images = [];
// A variable to store the image we want to display
let displayImage;

// preload() loads 10 images
function preload() {

  // need to upload images for it to work
  for (let i = 0; i < 10; i++) {
    // images [i] = loadImage(`assets/images/clown-${i}.png`);
    let clownImage = loadImage(`assets/images/clown-${i}.png`);
    images.push(clownImage);
  }

  // images[0] = loadImage(`assets/images/clown-0.png`);
  // images[1] = loadImage(`assets/images/clown-1.png`);
  // images[2] = loadImage(`assets/images/clown-2.png`);
  // images[3] = loadImage(`assets/images/clown-3.png`);
  // images[4] = loadImage(`assets/images/clown-4.png`);
  // images[5] = loadImage(`assets/images/clown-5.png`);
  // images[6] = loadImage(`assets/images/clown-6.png`);
  // images[7] = loadImage(`assets/images/clown-7.png`);
  // images[8] = loadImage(`assets/images/clown-8.png`);
  // images[9] = loadImage(`assets/images/clown-9.png`);
}

// setup() selects the image to display randomly
function setup() {
  createCanvas(600, 600);
  // Choose an image to display randomly from the array
  displayImage = random(images);
}

// draw() displays the randomly chosen image
function draw() {
  background(0);
  // Display the randomly selected image
  imageMode(CENTER);
  image(displayImage, width / 2, height / 2);
}

/////////////////////////////////////////////////

