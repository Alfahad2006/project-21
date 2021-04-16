var bullet,wall;
var speed,weight,thickness;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1500,400);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
}

function hasCollided(bullet,wall){
      bulletRightEdge=bullet.x+bullet.width;
      wallLeftEdge=wall.x;
      if(bulletRightEdge>=wallLeftEdge){
        return true
      }
      return false;
}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
       wall.shapeColor=color(0,255,0)
    }
    bullet.velocityX=0;
  }
 drawSprites();
}