function setup() {
  createCanvas(800,500)
  frameRate(75);
  background(255, 255, 255);
}

function draw() {
  background(85, 181, 230);
  noStroke();
  fill(97, 61, 7);
  rect(0, 250, width, 250);
  //rect(x top L, y top L, width, height)
  fill(0);
  rect(0, 300, width, 150);
}
