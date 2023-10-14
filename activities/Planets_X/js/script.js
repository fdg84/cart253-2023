/**
 * REMIX - PLANETS
 * Francis Ouellette
 */

"use strict"; 

let ufoImage;
let earthImage;
let marsImage;
let neptuneImage;
let jupiterImage;
let plutoImage;
let mercuryImage;
let venusImage;
let saturnImage;
let uranusImage;

function preload() {
    ufoImage = loadImage('assets/images/ufo.png');
    earthImage = loadImage('assets/images/earth.png');
    marsImage = loadImage('assets/images/mars.png');
    neptuneImage = loadImage('assets/images/neptune.png');
    jupiterImage = loadImage('assets/images/jupiter.png');
    plutoImage = loadImage('assets/images/pluto.png');
    mercuryImage = loadImage('assets/images/mercury.png');
    venusImage = loadImage('assets/images/venus.png');
    saturnImage = loadImage('assets/images/saturn.png');
    uranusImage = loadImage('assets/images/uranus.png');
}

let user = {
  };

let earth = {
  };

  let mars = {
  };
  
  let neptune = {
  };
  
  let jupiter = {
  };

  let pluto = {
  };

  let mercury = {
  };

  let venus = {
  };

  let saturn = {
  };

  let uranus = {
  };

  function setup() {
    createCanvas(windowWidth, windowHeight);
  
    // circle.x = constrain(circle.x, 0, width); // Constrain
    earth.x = random(0, height);
    earth.y = random(0, height);
    mars.x = random(0, height);
    mars.y = random(0, height);
    neptune.x = random(0, height);
    neptune.y = random(0, height);
    jupiter.x = random(0, height);
    jupiter.y = random(0, height);
    pluto.x = random(0, height);
    pluto.y = random(0, height);
    mercury.x = random(0, height);
    mercury.y = random(0, height);
    venus.x = random(0, height);
    venus.y = random(0, height);
    saturn.x = random(0, height);
    saturn.y = random(0, height);
    uranus.x = random(0, height);
    uranus.y = random(0, height);

    noCursor();
  }
  
  function draw() {
    background(0);


    // // edit here to add floating text when hover on planets
    // let i = 0;
    // while(i <= 10){
    //     print("i is:" + i);
    //     ellipse(random(width), random(height), 100);
    //     i = i+1;
    // }

    // if(mouseX > earth.x){
    //     background(0, 0, 0);
    // }
  
    // User movement
    user.x = mouseX;
    user.y = mouseY;
  
    // Check for planets (Hover Info)
    // let d = dist(user.x, user.y, earth.x, earth.y);
    // if (d < earth.size / 2 + user.size / 2) {
    //   noLoop();
    // }

          // Display ufo & planets
         
          imageMode(CENTER);
          image(ufoImage,mouseX,mouseY,150,150);
          imageMode(CENTER);
          image(earthImage,earth.x,earth.y,150,150);
          imageMode(CENTER);
          image(marsImage,mars.x,mars.y,150,150);
          imageMode(CENTER);
          image(neptuneImage,neptune.x,neptune.y,150,150);
          imageMode(CENTER);
          image(jupiterImage,jupiter.x,jupiter.y,150,150);
          imageMode(CENTER);
          image(plutoImage,pluto.x,pluto.y,150,150);
          imageMode(CENTER);
          image(mercuryImage,mercury.x,mercury.y,150,150);
          imageMode(CENTER);
          image(venusImage,venus.x,venus.y,150,150);
          imageMode(CENTER);
          image(saturnImage,saturn.x,saturn.y,150,150);
          imageMode(CENTER);
          image(uranusImage,uranus.x,uranus.y,150,150);
  } 

