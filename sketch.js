
var a, b, car, wall;

function setup() {
  createCanvas(1200,800);
 a = createSprite(400, 200, 50, 50);
 a.shapeColor = "green";
 b = createSprite(400, 200, 100, 50);
 b.shapeColor = "green";
car=createSprite(100, 150, 100, 50);
car.shapeColor = "red";
car.velocityX=2;
wall=createSprite(800, 150, 50, 200);
wall.shapeColor = 'red';

a.debug=true;
b.debug=true;
}

function draw() {
  background("black");  

  b.x = mouseX;
  b.y = mouseY;
  console.log(b.x - a.x);
  
if(isTouching( car, wall)){
car.shapeColor='pink';
}
  bounceOff(car, wall);

  drawSprites();
}
function isTouching(b,a){
  if(b.x-a.x <a.width/2+b.width/2&&
    a.x-b.x <a.width/2+b.width/2&&
    a.y-b.y<a.height/2+b.height/2&&
    b.y-a.y<a.height/2+b.height/2){
      return true;

  }
  else{
 return false
  }
}
function bounceOff(b,a){
  if(b.x-a.x <a.width/2+b.width/2&&
    a.x-b.x <a.width/2+b.width/2){
    
  b.velocityX=b.velocityX*(-1)
  a.velocityX=a.velocityX*(-1)
  }
   if(a.y-b.y<a.height/2+b.height/2&&
    b.y-a.y<a.height/2+b.height/2){
      b.velocityY=b.velocityY*(-1)
      a.velocityY=a.velocityY*(-1)
  } 
}