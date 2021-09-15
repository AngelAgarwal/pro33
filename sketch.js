// create var for all 
var snowman;
var snowmanimg;
var bgimg;
var bg;
var snowfall;
var snow;
var snowimg;

//upload images in this function 
function preload(){
snowmanimg = loadImage('snowman.png');
bgimg = loadImage('snow1.jpg');
snowimg = loadImage('snow4.webp');

}

function setup() {
  createCanvas(800,400);
  snowman = createSprite(600,300);
  snowman.addAnimation('snowman.png',snowmanimg);
  snowman.scale = 0.5;

  snow= new Snowfall();

}

function draw() {
  background(bgimg);  

   snow.display();

  drawSprites();
}

