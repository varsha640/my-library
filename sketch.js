
var lion,plant,plant2;

var ball, box;

function setup() {
  createCanvas(800,400);
  lion = createSprite(400, 200, 50, 50);
  lion.shapeColor = "red";

  plant = createSprite(300,200,40,40)
  plant.shapeColor = "red"

 plant2=createSprite(100,100,60,60)

  ball = createSprite(200,0,40,40);
  ball.velocityY = 4;
  box = createSprite(200,400,50,50)
  box.velocityY = -4;
}

function draw() {
  background(0);  

  lion.x = mouseX;
  lion.y = mouseY;

  console.log(lion.x)

if(isTouching(lion,plant2)){
  lion.shapeColor = "green";
    plant2.shapeColor = "green"
}
else{
  lion.shapeColor = "red";
    plant2.shapeColor = "red"
}

bounceoff(ball,box)
  
  
  drawSprites();
}




