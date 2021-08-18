var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  //Moving background
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  //create boy running
  boy = createSprite(180,340,30,30);
  boy.scale = 0.08;
  boy.addAnimation("Jakerunning",boyImg);

  //create left Boundary
  leftBoundary = createSprite(0,0,100,800);
  leftBoundary.visible = false;

  //create right Boundary
  rightBoundary = createSprite(410,0,100,800);
  rightBoundary.visible = false;

  
}

function draw() {
  background(0);
  path.velocityY = 4

  //boy moving on X axis with mouse
  boy.x = World.mouseX;

  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  //code to reset background
  if(path.y > 400){
    path.y = height/2;
  }

  drawSprites();
}
