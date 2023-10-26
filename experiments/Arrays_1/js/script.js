/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

// Our user, to move with the mouse
let user = {
  x: 0,
  y: 0,
  size: 100
};

let food1;
let food2;
let food3;

// // First food object
// let food1 = {
//   x: 250,
//   y: 300,
//   size: 50,
//   eaten: false // We want to track whether the user has eaten the food
// };

// // Second food object
// let food2 = {
//   x: 350,
//   y: 300,
//   size: 50,
//   eaten: false
// };

function setup() {
  createCanvas(windowWidth, windowHeight);

  food1 = createFood(150,300);
  food2 = createFood(250,300);
  food3 = createFood(350,300);
}

function createFood(x,y) {
    let food = {
      x: x,
      y: y,
      size: 50,
      eaten: false
    };
    return food;
  }

function draw() {
  background(0);

  // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either food
  checkFood(food1);
  checkFood(food2);
  checkFood(food3);

  // Display the user and foods
  displayUser();
  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
}

// Sets the user position to the mouse position
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

// Checks if the user overlaps the food1 object and eats it if so
function checkFood(food) {
    // We only want to check for an overlap if food1 hasn't been eaten yet
    if (!food.eaten) {
      let d = dist(user.x, user.y, food.x, food.y);
      if (d < user.size / 2 + food.size / 2) {
        food.eaten = true;
      }
    }
  }

// // Checks if the user overlaps the food1 object and eats it if so
// function checkFood1() {
//   // We only want to check for an overlap if food1 hasn't been eaten yet
//   if (!food1.eaten) {
//     let d = dist(user.x, user.y, food1.x, food1.y);
//     if (d < user.size / 2 + food1.size / 2) {
//       food1.eaten = true;
//     }
//   }
// }

// // The same as above, but for food2
// function checkFood2() {
//   if (!food2.eaten) {
//     let d = dist(user.x, user.y, food2.x, food2.y);
//     if (d < user.size / 2 + food2.size / 2) {
//       food2.eaten = true;
//     }
//   }
// }

// Draw the user as a circle
function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// Draw food as a circle
function displayFood(food) {
    // We don't want to display food1 if it's been eaten
    if (!food.eaten) {
      push();
      fill(255, 100, 100);
      ellipse(food.x, food.y, food.size);
      pop();
    }
  }

// // Draw food1 as a circle
// function displayFood1() {
//   // We don't want to display food1 if it's been eaten
//   if (!food1.eaten) {
//     push();
//     fill(255, 100, 100);
//     ellipse(food1.x, food1.y, food1.size);
//     pop();
//   }
// }

// // As above but for food2
// function displayFood2() {
//   if (!food2.eaten) {
//     push();
//     fill(255, 100, 100);
//     ellipse(food2.x, food2.y, food2.size);
//     pop();
//   }
// }