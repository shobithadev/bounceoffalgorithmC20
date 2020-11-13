 var Rect1, Rect2;


function setup() {
  createCanvas(800,400);
  Rect1 = createSprite(400, 100, 80, 30);
  Rect2 = createSprite(400,350,50,50);

  Rect1.debug= true;
  Rect2.debug= true;

  Rect1.shapeColor = "green";
  Rect2.shapeColor = "green"

  Rect1.velocityY=2;
  Rect2.velocityY=-2;
}

function draw() {
  background(180);  

 
   
  console.log(Rect1.x-Rect2.x);
  console.log(Rect1.width/2+Rect2.width/2);

  if(Rect1.x-Rect2.x<Rect1.width/2+Rect2.width/2 &&
    Rect2.x-Rect1.x<Rect1.width/2+Rect2.width/2 &&
    Rect2.y-Rect1.y<Rect1.height/2+Rect2.height/2&&
    Rect1.y-Rect2.y<Rect2.height/2+Rect1.height/2){


        Rect1.velocityY =Rect1.velocityY*(-1);
       Rect2.velocityY=Rect2.velocityY*(-1);
  }  

  drawSprites();
}