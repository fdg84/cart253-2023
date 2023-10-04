/**
 * Functions with return values
 * Francis Ouellette
 * 
 */

"use strict";

// function preload() {

// }

// function setup() {
//     createCanvas(500,500)
//     let hotCelsius = toCelsius(100);
//     console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius.`);
  
//     let coldCelsius = toCelsius(10);
//     console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius`);
//   }
  
//   function toCelsius(fahrenheit) {
//     let result = (fahrenheit - 32) * 5/9;
//     // Return the value in the celsius variable
//     return result;
//   }

// CIRCLE TEST

let circle = {
    x: 250,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0
  }
  
  function setup() {
    createCanvas(500, 500)
    reset();
  }
  
  function draw() {
    background(0);
  
    move();
  
    let offScreen = circleIsOffScreen();
    if (offScreen) {
      reset();
    }
  
    ellipse(circle.x, circle.y, circle.size);
  }
  
  function circleIsOffScreen() {
    let result = (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height);
    return result;
  }
  
  function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
  }
  
  function reset() {
    circle.x = 250;
    circle.y = 250;
    circle.vx = random(-10, 10);
    circle.vy = random(-10, 10);
  }