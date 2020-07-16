/* global createCanvas, frameRate, background*/

var img

function setup(){
  createCanvas(800, 500);
  frameRate(75);
  background(245, 230, 162);
  img = loadimage("WormClipart.jpg");
}

function draw(){
  image(img, 0, 0);
}
