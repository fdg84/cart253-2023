/**
 * WELCOME TO SPACE
 * Francis Ouellette
 */

const numStars = 500;
let stars = [];
let ufo;
let trailCount = 0;
let trail = [{x:100, y:500},{x:200, y:200},{x:200, y:200}]

function preload(){
  ufo = loadImage('assets/images/ufo.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  stroke(255);
  strokeWeight(2);
  
  for(let i = 0; i < numStars; i ++) {
  stars.push(new Star(random(width), random(height)));
  }
  noCursor();
}

function draw() {
  background(0, 50);
  
const acc = map(mouseX, 0, width, 0.5, 0.2);
  
stars = stars.filter(star => {
    star.draw();
    star.update(acc);
    return star.isActive();
  });
  
while(stars.length < numStars) {
    stars.push(new Star(random(width), random(height)));
    }
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
}

class Star {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.prevPos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.ang = atan2(y - (height/2), x - (width/2));
  }
  
  isActive() {
    return onScreen(this.prevPos.x, this.prevPos.y);
  }
  
  update(acc) {
    this.vel.x += cos(this.ang) * acc;
    this.vel.y += sin(this.ang) * acc;
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }
  
  draw() {
    const alpha = map(this.vel.mag(), 0, 3, 0, 255);
    stroke(255, alpha);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  }
}

function onScreen(x, y) {
  return x >= 0 && x <= width && y >= 0 && y <= height;  
}

function mousePressed() {
  window.location.href = "/index3.html"
}