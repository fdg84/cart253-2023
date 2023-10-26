/**
 * Age of Aquariums
 * Francis Ouellette
 * 
 * New Exercise
 */

// "use strict";

// // Our user, to move with the mouse
// let user = {
//   x: 0,
//   y: 0,
//   size: 20
// };

// let snacks = [];
// let snacksSize = 10;

// // // fish objects
// // let fish1;
// // let fish2;
// // let fish3;
// // let fish4;
// // let fish5;
// // let fish6;

// function setup() {
//   createCanvas(600, 600);

// for (let i = 0; i < snacksSize; i++) {
//      let fish = createfish(random(0, width), random(0, height));
//      snacks.push(fish);
//      }

// //   fish1 = createfish(50, 300);
// //   fish2 = createfish(150, 300);
// //   fish3 = createfish(250, 300);
// //   fish4 = createfish(350, 300);
// //   fish5 = createfish(450, 300);
// //   fish6 = createfish(550, 300);
// }

// function createfish(x, y) {
//   let fish = {
//     x: x,
//     y: y,
//     size: 50,
//     vx: 0,
//     vy: 0,
//     speed: 2
//     eaten: false
//   };
//   return fish;
// }

// function draw() {
//   background(0);

// for (let i = 0; i < snacks.length; i++) {
//      movefish(snacks[i]);
//      displayfish(snacks[i]);
//     }

//   // Move the user (with the mouse)
//   moveUser();

//   // Check whether the user has eaten either fish
//   checkfish(fish1);
//   checkfish(fish2);
//   checkfish(fish3);
//   checkfish(fish4);
//   checkfish(fish5);
//   checkfish(fish6);

//   // Display the user and fishs
//   displayUser();
//   displayfish(fish1);
//   displayfish(fish2);
//   displayfish(fish3);
//   displayfish(fish4);
//   displayfish(fish5);
//   displayfish(fish6);
// }

// // Sets the user position to the mouse position
// function moveUser() {
//   user.x = mouseX;
//   user.y = mouseY;
// }

// // movefish(fish)
// // Chooses whether the provided fish changes direction and moves it
// function movefish(fish) {
//     // Choose whether to change direction
//     let change = random(0, 1);
//     if (change < 0.05) {
//       fish.vx = random(-fish.speed, fish.speed);
//       fish.vy = random(-fish.speed, fish.speed);
//     }
  
//     // Move the fish
//     fish.x = fish.x + fish.vx;
//     fish.y = fish.y + fish.vy;
  
//     // Constrain the fish to the canvas
//     fish.x = constrain(fish.x, 0, width);
//     fish.y = constrain(fish.y, 0, height);
//   }

// // Checks if the user overlaps the fish object and eats it if so
// function checkfish(fish) {
//   if (!fish.eaten) {
//     let d = dist(user.x, user.y, fish.x, fish.y);
//     if (d < user.size / 2 + fish.size / 2) {
//       fish.eaten = true;
//     }
//   }
// }

// // Draw the user as a circle
// function displayUser() {
//   push();
//   fill(255);
//   ellipse(user.x, user.y, user.size);
//   pop();
// }

// // Draw the fish as a circle
// function displayfish(fish) {
//   // Check if the fish is still available to be eaten
//   if (!fish.eaten) {
//     // Display the fish as its position and with its size
//     push();
//     fill(255, 100, 100);
//     ellipse(fish.x, fish.y, fish.size);
//     pop();
//   }
// }

// function mousePressed() {
//     let fish = createfish(mouseX,mouseY);
//     snacks.push(fish);
//   }

  //////////////////////////////////////////////

  "use strict";

  // Our user, to move with the mouse
  let user = {
    x: 0,
    y: 0,
    size: 20
  };
  
  let school = [];
  let schoolSize = 4;

  let fish1;
  let fish2;
  let fish3;
  
  
  // // Our fish
  // let fish1;
  // let fish2;
  // let fish3;
  // let fish4;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);

  fish1 = createFish(150,300);
  fish2 = createFish(250,300);
  fish3 = createFish(350,300);
  
  for (let i = 0; i < schoolSize; i++) {
      let fish = createFish(random(0, width), random(0, height));
      school.push(fish);
      // school[i] = createFish(random(0, width), random(0, height));
    }
  
  //   // Create four fish, positioned randomly
  //   school[0] = createFish(random(0, width), random(0, height));
  //   school[1] = createFish(random(0, width), random(0, height));
  //   school[2] = createFish(random(0, width), random(0, height));
  //   school[3] = createFish(random(0, width), random(0, height));
  }
  
  // createFish(x,y)
  // Creates a new JavaScript Object describing a fish and returns it
  function createFish(x, y) {
    let fish = {
      x: x,
      y: y,
      size: 50,
      vx: 0,
      vy: 0,
      speed: 2
      eaten: false
    };
    return fish;
  }
  
  // draw()
  // Moves and displays our fish
  function draw() {
    background(0);
  
      // Move the user (with the mouse)
  moveUser();

  // Check whether the user has eaten either fish
  checkFish(fish1);
  checkFish(fish2);
  checkFish(fish3);

  // Display the user and fishs
  displayUser();
  displayFish(fish1);
  displayFish(fish2);
  displayFish(fish3);
}

// Sets the user position to the mouse position
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
  }
  
  // use school.length instead of schoolSize
  for (let i = 0; i < school.length; i++) {
      moveFish(school[i]);
      displayFish(school[i]);
  }

  // Checks if the user overlaps the fish1 object and eats it if so
function checkFish(fish) {
    // We only want to check for an overlap if fish1 hasn't been eaten yet
    if (!fish.eaten) {
      let d = dist(user.x, user.y, fish.x, fish.y);
      if (d < user.size / 2 + fish.size / 2) {
        fish.eaten = true;
      }
    }
  }
  
  // for (let i = 0; i <= 4; i++) {
  //     displayFish(school[i]);
  // }
  
  //   moveFish(school[0]);
  //   moveFish(school[1]);
  //   moveFish(school[2]);
  //   moveFish(school[3]);
  
  //   displayFish(school[0]);
  //   displayFish(school[1]);
  //   displayFish(school[2]);
  //   displayFish(school[3]);
  //   }

  // Draw the user as a circle
function displayUser() {
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
  }
  
  // moveFish(fish)
  // Chooses whether the provided fish changes direction and moves it
  function moveFish(fish) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
      fish.vx = random(-fish.speed, fish.speed);
      fish.vy = random(-fish.speed, fish.speed);
    }
  
    // Move the fish
    fish.x = fish.x + fish.vx;
    fish.y = fish.y + fish.vy;
  
    // Constrain the fish to the canvas
    fish.x = constrain(fish.x, 0, width);
    fish.y = constrain(fish.y, 0, height);
  }
  
  // displayFish(fish)
  // Displays the provided fish on the canvas
  function displayFish(fish) {
    // We don't want to display food1 if it's been eaten
    if (!fish.eaten) {
    push();
    fill(200, 100, 100);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }
}
  
  function mousePressed() {
    let fish = createFish(mouseX,mouseY);
    school.push(fish);
  }