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
  // strokeWeight(30);
  strokeWeight(4);
  stroke(10)
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

      drawFlower(x, y, min(cellWidth, cellHeight));
    }
  }
}

function drawFlower(x, y, size) {
  const flowerSize = random(size * .005, size * 1);
  const spacing = flowerSize / 2;

  fill(random(255), random(255), random(255));
  circle(x, y, flowerSize);
}