//declaring global variables
var jaxon_run
var road_ground
var jaxon
var path
var wall1
var wall2


function preload(){
//pre-load images
  jaxon_run = loadAnimation("Runner-1.png","Runner-2.png");
  road_ground = loadAnimation("path.png");
}

function setup(){
  createCanvas(400,400);
//create sprites here

  path = createSprite(200,200);
  path.addAnimation("ground",road_ground);

//creating the invisible walls
  wall1 = createSprite(60,200,25,400)
  wall1.visible = false;
  wall2 = createSprite(340,200,25,400)
  wall2.visible = false;

//creating jaxon
  jaxon = createSprite(200,300);
  jaxon.addAnimation("run",jaxon_run);
  jaxon.scale = 0.05;

}


function draw() {
  createEdgeSprites();
  background("black");
path.velocityY = 4;

//adding if statement for infinte path
if(path.y > 500){
  path.y = height/2;
}

//adding movement for jaxon
if(keyIsDown(LEFT_ARROW)){
  jaxon.x = jaxon.x + -5;
}
if(keyIsDown(RIGHT_ARROW)){
  jaxon.x = jaxon.x + 5;
}
//adding collision between jaxon and invisble walls
jaxon.collide(wall1);
jaxon.collide(wall2);
  drawSprites();
}
