function setup() {
  createCanvas(400, 400);
  
  blendMode(ADD); // Additive blend mode
  
  pg = createGraphics(400, 400);
  pg.noStroke();
  pg.fill(255);
  
  noiseRange = 10;    // How far move each channel (how much to scale the noise)
  noiseTime  = 0;    // Continuously increasing time value for noise calculations
  noiseSpeed = 0.01; // `noiseTime` addend for each frame
  
  // Noise offsets per axis per channel
  noiseOffsetRX = random(1000);
  noiseOffsetRY = random(1000);
  noiseOffsetGX = random(1000);
  noiseOffsetGY = random(1000);
  noiseOffsetBX = random(1000);
  noiseOffsetBY = random(1000);
}

function draw() {
  // Normal drawing operations here, all prefixed with `pg.`
  pg.clear(); // Using `clear` instead of `background`
  pg.circle(width / 2, height / 2, 300); // Arbitrary drawing op
  
  // Make it spaz out on mouseDown
  if (mouseIsPressed) {
    noiseTime += noiseSpeed * 100;
  } else {
    noiseTime += noiseSpeed;
  }
    
  
  // Post-processing with rendered image
  // Note that this is the actual point of this example
  // All the "noise" business is just to have the channels moving, for effect
  // The XY values of each `image` can just as easily be set manually
  clear();
  background(0);
  
  tint(255, 0, 0); // Tint red
  image(pg, noiseFor(noiseOffsetRX), noiseFor(noiseOffsetRY)); // Render image to screen
  tint(0, 255, 0); // Tint green
  image(pg, noiseFor(noiseOffsetGX), noiseFor(noiseOffsetGY)); // Render image to screen
  tint(0, 0, 255); // Tint blue
  image(pg, noiseFor(noiseOffsetBX), noiseFor(noiseOffsetBY)); // Render image to screen
}

// Get the perlin noise for the current `noiseTime` plus the given `offset`.
// Result is mapped to the `noiseRange`.
function noiseFor(offset) {
  return map(noise(noiseTime + offset), 0, 1, -noiseRange, noiseRange);
}
