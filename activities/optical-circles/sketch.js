let angle = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10);
  for (let i = 50; i < width - 45; i += 50) {
    for (let j = 50; j < height - 45; j += 50) {

      push()
      fill(255, 160, 60);
      stroke(0, 0, 255);
      strokeWeight(3);
      ellipse(i, j, 25, 25);
      pop()

      push()
      translate(i, j);
      rotate(HALF_PI + i - angle * 3)
      stroke(255, 110, 110);
      strokeWeight(8);
      noFill();
      arc(0, 0, 30, 30, 0, PI)
      pop()

      push()
      translate(i, j);
      rotate(QUARTER_PI * j + angle * 4)
      stroke(0, 155, 255);
      strokeWeight(3);
      noFill();
      arc(0, 0, 25, 25, PI , 0)
      pop()

      angle += 0.0005

    }
  }
}