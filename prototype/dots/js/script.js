/**
 * TEMPLATE
 * Francis Ouellette
 * 
 * Test!
 */

"use strict";

function preload() {

}

function setup() {
  createCanvas(displayWidth, displayHeight);
  noLoop();
  strokeWeight(12);
}

function draw() {
  background(0, 255, 100);

  const columns = 10;
  const rows = 10;
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
  const flowerSize = random(size * .5, size * .95);
  const petalSize = flowerSize / 2;
  const spacing = petalSize / 2;

  fill(random(255), random(255), random(255));
  circle(x - spacing, y - spacing, petalSize);
  circle(x + spacing, y - spacing, petalSize);
  circle(x - spacing, y + spacing, petalSize);
  circle(x + spacing, y + spacing, petalSize);

  fill(random(255), random(255), random(255));
  circle(x, y, petalSize);
}