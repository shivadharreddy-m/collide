var fixedrect,movingrect;


function setup() {


  createCanvas(800,400);
 
  fixedrect=createSprite(400,400,60,80);
fixedrect.shapeColor="pink";
  movingrect=createSprite(300,200,70,30);
  movingrect.shapeColor="pink";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 )  {

  movingrect.shapeColor="red";
  fixedrect.shapeColor="red";



}
else{
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";

  
}
}