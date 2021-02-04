var fairyImg,starnightImg,starImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
constBody = Matter.Body;

function preload()
{
   //preload the images here
fairyImg=loadAnimation("images/fairy.png","images/fairy1.png","images/fairy2.png")

starnightImg=loadImage("images/starnight.png")
starImg=loadImage("images/star.png")
}

function setup() {
  createCanvas(800, 750);
  fairy=createSprite(130,520);
  fairy.addAnimation("fairyflying",fairyImg);
  star=createSprite(650,30);
  star.addImage(starImg);
 fairy.scale=0.4;
 star.scale=0.2;
  engine= Engine.create();
  world = engine.world;

  starBody = Bodies.circle(650,30,5,{restitution:0.5,isStatic:true});
      World.add(world,starBody);

      Engine.run(engine);
}


function draw() {
  background("black");
  star.x= starBody.position.x
  star.y= starBody.position.y

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470){

    Matter.Body.setStatic(starBody,true);
  }
  drawSprites();
}
function keyPressed(){
  
    if(keyCode === RIGHT_ARROW){

     fairy.x= fairy.x+20;
    }

    if(keyCode === LEFT_ARROW){

      fairy.x = fairy.x-20;
    }
    
    if (keyCode === DOWN_ARROW){

      Matter.Body.setStatic(starBody,false);
    }


}
