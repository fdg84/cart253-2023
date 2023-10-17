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

let earth = {};
let mars = {};
let neptune = {};
let jupiter = {};
let mercury = {};
let venus = {};
let saturn = {};
let uranus = {};
let ufo = {};
  
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
    
    textSize(20)
    fill(255);
    text("Mercury", parseInt(mercury.style.left, 10) + 39, parseInt(mercury.style.top, 10) + 80);

    textSize(20)
    fill(255);
    text("Venus", parseInt(venus.style.left, 10) + 45, parseInt(venus.style.top, 10) + 80);

    textSize(20)
    fill(255);
    text("Earth", parseInt(earth.style.left, 10) + 49, parseInt(earth.style.top, 10) + 80);

    textSize(20)
    fill(255);
    text("Mars", parseInt(mars.style.left, 10) + 48, parseInt(mars.style.top, 10) + 84);

    textSize(20)
    fill(255);
    text("Jupiter", parseInt(jupiter.style.left, 10) + 44, parseInt(jupiter.style.top, 10) + 80);

    textSize(20)
    fill(255);
    text("Saturn", parseInt(saturn.style.left, 10) + 45, parseInt(saturn.style.top, 10) + 80);

    textSize(20)
    fill(255);
    text("Uranus", parseInt(uranus.style.left, 10) + 45, parseInt(uranus.style.top, 10) + 85);

    textSize(20)
    fill(255);
    text("Neptune", parseInt(neptune.style.left, 10) + 39, parseInt(neptune.style.top, 10) + 85);

    noCursor();
    document.onmousemove = updateUfoPosition;
  }
  
  function updateUfoPosition(e) {
    ufo.style.left = e.x - 80 + "px";
    ufo.style.top = e.y -80 + "px";
  }

  function onHover(img) {
    img.style.opacity=.5
  }

  function offHover(img) {
    img.style.opacity=1
  }