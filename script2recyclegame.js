/* global createCanvas, background, noStroke, fill, rect, width, loadImage, image */


var beach, recyclingbin, trashbin;


function setup() {
  createCanvas(800, 500);
  
  beach = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FBeach%20Clipart2.jpg?v=1595548868350');
  recyclingbin = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FRecycling%20Bin.png?v=1595548661507');
  trashbin = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FTrash%20Can.png?v=1595549282728')
}

function draw() {
  
  //BACKGROUND
  image(beach, 0, 0, 800, 550);
  //image(imgname, x top L, y top L, width, height)
  image(recyclingbin, 100, 360, 150, 135);
  image(trashbin, 600, 310, 130, 180);
}
