/**
 * WELCOME TO SPACE
 * Francis Ouellette
 */

"use strict"; 

let mercury;
let venus;
let earth;
let mars;
let jupiter;
let saturn;
let uranus;
let neptune;
let ufo;

let c1, c2;
let widthDivide;

// planets object
const planets = [
  {
    name: "Mercury",
    direction: 1,
    y:100,
    vy:1
  },
  {
    name: "Venus",
    direction: -1,
    y:300,
    vy:1
  },
  {
    name: "Earth",
    direction: 1,
    y:120,
    vy:1
  },
  {
    name: "Mars",
    direction: -1,
    y:100,
    vy:1
  },
  {
    name: "Jupiter",
    direction: 1,
    y:200,
    vy:1
  },
  {
    name: "Saturn",
    direction: -1,
    y:320,
    vy:1
  },
  {
    name: "Uranus",
    direction: 1,
    y:100,
    vy:1
  },
  {
    name: "Neptune",
    direction: -1,
    y:150,
    vy:1
  },
];

let trailCount = 0;
let trail = [{x:100, y:500},{x:100, y:100},{x:200, y:200}];
let mouseXSlice;

function preload() {
  mercury = loadImage('assets/images/mercury.png');
  venus = loadImage('assets/images/venus.png');
  earth = loadImage('assets/images/earth.png');
  mars = loadImage('assets/images/mars.png');
  jupiter = loadImage('assets/images/jupiter.png');
  saturn = loadImage('assets/images/saturn.png');
  uranus = loadImage('assets/images/uranus.png');
  neptune = loadImage('assets/images/neptune.png');
  ufo = loadImage('assets/images/ufo.png');
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  widthDivide = width/8;
  c1 = color(0, 0, 0);
  c2 = color(204, 102, 0);
  noCursor();
};

function draw(){
  // draw background  
  setGradient(0, 0, width, height, c2, c1);
  
  // draw planets
  image(mercury, 0, planets[0].y);
  image(venus, widthDivide, planets[1].y);
  image(earth, widthDivide*2, planets[2].y);
  image(mars, widthDivide*3, planets[3].y);
  image(jupiter, widthDivide*4, planets[4].y);
  image(saturn, widthDivide*5, planets[5].y);
  image(uranus, widthDivide*6, planets[6].y);
  image(neptune, widthDivide*7, planets[7].y);
  
  // draw cursor
  image(ufo, mouseX, mouseY, 65, 65);
  image(ufo, trail[0].x, trail[0].y, 65, 65);
  image(ufo, trail[1].x, trail[1].y, 65, 65);
  image(ufo, trail[2].x, trail[2].y, 65, 65);
  
  // keep track of trail frame mouse positions
  trailCount++
  if(trailCount > 2) {
     trail.pop();
     trail.unshift({x:pwinMouseX,y:pwinMouseY});
     trailCount = 0;
  }

  // draw planet names
  textSize(200);
  fill(255);
  textAlign(CENTER,CENTER);
  textFont("Xanh Mono");
  mouseXSlice = Math.floor(mouseX/widthDivide);
  if (mouseXSlice < 0) {
      mouseXSlice = 0 
  } 
  text(planets[mouseXSlice].name,width/2,height/2);
    
  // update each planet
  planets.forEach(planet => {
    if (planet.y <= 100 || planet.y >= 700){
        planet.direction = planet.direction*-1;
        planet.vy = planet.vy*planet.direction;
        }
        planet.vy = planet.vy + .5*planet.direction;     
        planet.y = planet.y + planet.direction*planet.vy;
    })
}

// draw background - linear interpolation
function setGradient(x, y, w, h, c1, c2) {
  for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + .3*w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
  }  
}

// return to starting page
function mousePressed() {
    window.location.href = "/index.html";
}