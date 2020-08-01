var bullet;
var wall,thickness;
var speed ,weight;
var damge;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  
  speed=random(223,321);
   weight=random(30,52);
  bullet= createSprite(50,200,20,100);
  wall=createSprite(1200,200,thickness,height/2);
  thickness=wall.width;
  thickness=random(22,83);
  wall.shapeColour=color(80,80,80);
  bullet.velocityX=speed;
  
 damage=0.5*weight*speed*speed/(thickness  *thickness *thickness );

}

function draw() {
  background(255,255,255);  
  if(wall.x-bullet.x<(bullet.width+wall.width/2)){
if(damage>10){
  wall.shapeColour=color(80,80,80);
}

    if(damge===3.68&& thickness===70 ){
      wall.shapeColour=color(250,0,0);

    }

    if(damge===12.43&& thickness===40){
      wall.shapeColour=color(0,255,0);
    }
  }
  drawSprites();
}