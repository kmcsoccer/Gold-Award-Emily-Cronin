/* global createCanvas, frameRate, background, loadImage, image, noStroke, fill, rect, width, text, score, keyIsPressed, keyCode, LEFT_ARROW, RIGHT_ARROW,
WormPositionX, WormPositionY, textSize, ellipse*/

var worm, apple, wrapper; //checkmark, redx 
var score, lives, GameOn;
var WormPositionX, WormPositionY, ApplePosition;
var RightSideOfWorm, LeftSideOfWorm, LeftSideOfApple, RightSideOfWrapper;

function setup(){
  createCanvas(800, 500);
  frameRate(75);
  background(255, 255, 255);
  
  WormPositionX = 370;
  WormPositionY = 215;
  
  score = 0;
  lives = 3;
  GameOn = true;
  
  worm = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FWormClipart2.jpg?v=1594929905517');
  apple = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FAppleClipart.jpg?v=1594930312712');
  wrapper = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FFoodWrapper.png?v=1594931298566');
//  checkmark = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FGreenCheckmark.jpg?v=1594934689873');
//  redx = loadImage('https://cdn.glitch.com/0e5db94f-2a9c-481a-ba2f-6b919eaaacdf%2FRedX.jpg?v=1594935161087');

}


function draw(){
  if (GameOn == true);{
    background(255, 255, 255);
    noStroke();
    fill(97, 61, 7);
    rect(0, 300, width, 250);
    //rect(x top L, y top L, width, height)
    
    if (lives == 3) {
      ellipse(30, 30, 25);
      ellipse(30, 70, 25);
      ellipse(30, 110, 25);
    } else if (lives == 2) {
      ellipse(30, 30, 25);
      ellipse(30, 70, 25);
    } else if (lives == 1) {
      ellipse(30, 30, 25);
    } else {
      GameOn = false;
    }

    fill(173, 137, 78);
    rect(320, 15, 200, 60, 60);
    fill(0);
    textSize(32);
    text("Score: " + score, 365, 55);


    image(worm, WormPositionX, WormPositionY, 80, 85);
    //image(img, x top L, y top L, width, height)
    image(apple, 600, 140, 150, 155);
    image(wrapper, 40, 130, 200, 170);

    if (keyIsPressed && keyCode == LEFT_ARROW){
      WormPositionX = WormPositionX - 4;
    }
    if (keyIsPressed && keyCode == RIGHT_ARROW){
      WormPositionX = WormPositionX + 4;
    }


    RightSideOfWorm = WormPositionX +80;
    LeftSideOfApple = 600;
    
    
    if (RightSideOfWorm >= LeftSideOfApple){
      score = score + 1;
      apple = 850;
      worm = 850;
      //image(checkmark, 640, 65, 70, 75);
    }

    LeftSideOfWorm = WormPositionX;
    RightSideOfWrapper = 40 +200;
    
    if (LeftSideOfWorm <= RightSideOfWrapper){
      lives = 2;
      apple = 850;
      worm = 850;
      //image(redx, 120, 65, 70, 75);
      rect(330, 60, 70, 150)
    }
  }
}
