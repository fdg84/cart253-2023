/**
 * Generative Dots
 * Francis Ouellette
 */

"use strict";

function preload() {
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  noLoop();
  strokeWeight(30); // STROKE THICKNESS (ADJUST)
  stroke(55,100,255)
}

function draw() {
  background(255);

  const columns = 20;
  const rows = 12;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;

      drawDots(x, y, min(cellWidth, cellHeight));
    }
  }
}

function drawDots(x, y, size) {
  const dotSize = random(size * .005, size * 1); // DOT SIZES
  const spacing = dotSize / 2;

  fill(random(0), random(250), random(250)); // DOT COLORS
  circle(x, y, dotSize);
}