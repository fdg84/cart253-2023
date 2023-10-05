/**
 * Class Activity
 * Francis Ouellette
 * 
 * Love Actually!
 */

let circle1 = {
    x: 550,
    y: 150,
    vx: 0,
    vy: 0,
    speed: 10,
    size: 100
  }

let circle = {
    x: 750,
    y: 350,
    vx: 0,
    vy: 0,
    speed: 5,
    size: 100
  }
  
  function setup() {
    createCanvas(1500, 700);
  }
  
  function draw() {
    background(255,0,0);

        if (keyIsDown(LEFT_ARROW)) {
        circle.vx = -circle.speed;
        }
        else if (keyIsDown(RIGHT_ARROW)) {
        circle.vx = circle.speed;
        }
        else {
        circle.vx = 0;
        }
        if (keyIsDown(UP_ARROW)) {
        circle.vy = -circle.speed;
        }
        else if (keyIsDown(DOWN_ARROW)) {
        circle.vy = circle.speed;
        }
        else {
        circle.vy = 0;
        }
    
        circle.x = circle.x + circle.vx;
        circle.y = circle.y + circle.vy;
    
        ellipse(circle.x, circle.y, circle.size);

  circle1.vx = random(-circle1.speed, circle1.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);

  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  ellipse(circle1.x, circle1.y, circle1.size);

  circle1.x = constrain(circle1.x, 0, width);
  circle1.y = constrain(circle1.y, 0, width);
}

        if (state === `lovebug`) {
        lovebug();
        }
        else if (state === `captured`) {
        captured();
        }
  
  function lovebug() {
    checkOverlap();
    }
  
  function captured() {
    push();
    textSize(64);
    fill(255);
    textAlign(CENTER,CENTER);
    text(`CAPTURED THE LOVE BUG!`,width/2,height/2);
    pop();
    }

  function checkOverlap() {
    let d = dist(circle1.x,circle1.y,circle.x,circle.y);
    if (d < circle1.size/2 + circle.size/2) {
      state = `captured`;
    }
  }
