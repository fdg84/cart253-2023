/**
 * REMIX - PLANETS
 * Francis Ouellette
 */

"use strict"; 

let ufoImage, earthImage, marsImage, neptuneImage, jupiterImage, mercuryImage, venusImage, saturnImage, uranusImage;

function preload() {
    ufoImage = loadImage('assets/images/ufo.png');
    earthImage = loadImage('assets/images/earth.png');
    marsImage = loadImage('assets/images/mars.png');
    neptuneImage = loadImage('assets/images/neptune.png');
    jupiterImage = loadImage('assets/images/jupiter.png');
    mercuryImage = loadImage('assets/images/mercury.png');
    venusImage = loadImage('assets/images/venus.png');
    saturnImage = loadImage('assets/images/saturn.png');
    uranusImage = loadImage('assets/images/uranus.png');
}

// let user = {
//   };

let earth = {};
let mars = {};
let neptune = {};
let jupiter = {};
let mercury = {};
let venus = {};
let saturn = {};
let uranus = {};
let ufo = {};
let mercuryText = {};
// let mercuryBox = {}
  
  function setup() {
    
    earth = document.getElementById("earth");
    mars = document.getElementById("mars");
    neptune = document.getElementById("neptune");
    jupiter = document.getElementById("jupiter");
    mercury = document.getElementById("mercury");  
    venus = document.getElementById("venus");
    saturn = document.getElementById("saturn");
    uranus = document.getElementById("uranus");
    ufo = document.getElementById("ufo");  
    
    createCanvas(windowWidth, windowHeight);
    const widthDivide = width/8
    
    mercury.style.left = random(0, widthDivide) + "px";
    mercury.style.top = random(200, height-200) + "px";
    
    venus.style.left = widthDivide + random(50, widthDivide-50) + "px";
    venus.style.top = random(200, height-200) + "px";

    earth.style.left = 2*widthDivide + random(50, widthDivide-50) + "px";
    earth.style.top = random(200, height-200) + "px";

    mars.style.left = 3*widthDivide + random(50, widthDivide-50) + "px";
    mars.style.top = random(200, height-200) + "px";

    jupiter.style.left = 4*widthDivide + random(50, widthDivide-50) + "px";
    jupiter.style.top = random(200, height-200) + "px";

    saturn.style.left = 5*widthDivide + random(50, widthDivide-50) + "px";
    saturn.style.top = random(200, height-200) + "px";

    uranus.style.left = 6*widthDivide + random(50, widthDivide-50) + "px";
    uranus.style.top = random(200, height-200) + "px";

    neptune.style.left = 7*widthDivide + random(50, widthDivide-50) + "px";
    neptune.style.top = random(200, height-200) + "px";
    
    // earth.x = 2*widthDivide + random(50, widthDivide-50);
    // earth.y = random(200, height-200);
    
    // mars.x = 3*widthDivide + random(50, widthDivide-50);
    // mars.y = random(200, height-200);
    
    // jupiter.x = 4*widthDivide + random(50, widthDivide-50);
    // jupiter.y = random(200, height-200);
    
    // saturn.x = 5*widthDivide + random(50, widthDivide-50);
    // saturn.y = random(200, height-200);
    
    // uranus.x = 6*widthDivide + random(50, widthDivide-50);
    // uranus.y = random(200, height-200);
    
    // neptune.x = 7*widthDivide + random(50, widthDivide-50);
    // neptune.y = random(200, height-200);
    
    background(0);
    
    imageMode(CENTER);
    image(earthImage,earth.x,earth.y,150,150);
    imageMode(CENTER);
    image(marsImage,mars.x,mars.y,150,150);
    imageMode(CENTER);
    image(neptuneImage,neptune.x,neptune.y,150,150);
    imageMode(CENTER);
    image(jupiterImage,jupiter.x,jupiter.y,150,150);
    
    textSize(20)
    fill(0, 102, 153);
    text("Mercury", parseInt(mercury.style.left, 10) + 35, parseInt(mercury.style.top, 10) + 75);
    
    // imageMode(CENTER);
    // image(venusImage,venus.x,venus.y,150,150);
    imageMode(CENTER);
    image(saturnImage,saturn.x,saturn.y,150,150);
    imageMode(CENTER);
    image(uranusImage,uranus.x,uranus.y,150,150);
          

    noCursor();
    document.onmousemove = updateUfoPosition;
    
  }
  
  function updateUfoPosition(e) {
    ufo.style.left = e.x - 75 + "px";
    ufo.style.top = e.y -75 + "px";
  }

  function onHover(img) {
    img.style.opacity=.5
  }

  function offHover(img) {
    img.style.opacity=1
  }