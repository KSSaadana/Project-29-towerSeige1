const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16,block17;
var block18,block19,block20,block21,block22,block23,block24, block25;
var polygon, polygon_img;
var finished_box;
var slingShot;
var score=0;
var finished_Blocks=0;
function preload() {
  polygon_img=loadImage("Sprites/polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

finished_box= new Ground(1099,242,197,310);
left_wall= new Ground(10,165,20,450)
right_wall= new Ground(990,165,20,450)

ground1 = new Ground(100,395,200,10);
ground2 = new Ground(300,395,200,10);
ground3 = new Ground(500,395,200,10);
ground4= new Ground(700,395,200,10);
ground5 = new Ground(900,395,200,10);

base1 = new Ground(437,300,240,20);

block1 = new Block(345,275,30,40);
block2 = new Block(375,275,30,40);
block3 = new Block(405,275,30,40);
block4 = new Block(435,275,30,40);
block5 = new Block(465,275,30,40);
block6 = new Block(495,275,30,40);
block7 = new Block(525,275,30,40);

block8 = new Block(375,235,30,40);
block9 = new Block(405,235,30,40);
block10 = new Block(435,235,30,40);
block11 = new Block(465,235,30,40);
block12 = new Block(495,235,30,40);

block13 = new Block(405,195,30,40);
block14 = new Block(435,195,30,40);
block15 = new Block(465,195,30,40);

block16 = new Block(435,155,30,40);

base2 = new Ground(745,250,180,20);

block17 = new Block(685,205,30,40);
block18 = new Block(715,205,30,40);
block19 = new Block(745,205,30,40);
block20 = new Block(775,205,30,40);
block21 = new Block(805,205,30,40);

block22 = new Block(715,195,30,40);
block23 = new Block(745,195,30,40);
block24 = new Block(775,195,30,40);

block25 = new Block(745,155,30,40);

polygon = Bodies.circle(100,200,20);
World.add(world, polygon);

slingShot = new SlingShot(polygon, {x:150, y:200})

}

function draw(){
    background("grey");
    Engine.update(engine);

    textSize(30);
    fill("red");
        text("Score: "+score , width-400 , 30);
    
    textSize(20);
    fill("purple");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

    textSize(20);
    fill("yellow");
    text("blocks finished: "+finished_Blocks , width-180 , 80);
    if(score>4 && score<6){
      textSize(20);
      fill("yellow");
      text("Good!", 100,70)
    }
    
    if(score>9 && score<11){
      textSize(20);
      fill("yellow");
      text("Amazing!", 100,70)
    } 
    
    if(score>14 && score<16){
      textSize(20);
      fill("yellow");
      text("Excellent!", 100,70)
    }
     
    if(score>19 && score<21){
      textSize(20);
      fill("yellow");
      text("Outstanding!", 100,70)
    }
    
    if(score>19 && score<21){
      textSize(20);
      fill("yellow");
      text("Magnificent!", 100,70)
    }
    detectollision(block1,ground1)
  detectollision(block2,ground1)
  detectollision(block3,ground1)
  detectollision(block4,ground1)
  detectollision(block5,ground1)
  detectollision(block6,ground1)
  detectollision(block7,ground1)
  detectollision(block8,ground1)
  detectollision(block9,ground1)
  detectollision(block10,ground1)
  detectollision(block11,ground1)
  detectollision(block12,ground1)
  detectollision(block13,ground1)
  detectollision(block14,ground1)
  detectollision(block15,ground1)
  detectollision(block16,ground1)
  detectollision(block17,ground1)
  detectollision(block18,ground1)
  detectollision(block19,ground1)
  detectollision(block20,ground1)
  detectollision(block21,ground1)
  detectollision(block22,ground1)
  detectollision(block23,ground1)
  detectollision(block24,ground1)

  detectollision(block1,ground2)
  detectollision(block2,ground2)
  detectollision(block3,ground2)
  detectollision(block4,ground2)
  detectollision(block5,ground2)
  detectollision(block6,ground2)
  detectollision(block7,ground2)
  detectollision(block8,ground2)
  detectollision(block9,ground2)
  detectollision(block10,ground2)
  detectollision(block11,ground2)
  detectollision(block12,ground2)
  detectollision(block13,ground2)
  detectollision(block14,ground2)
  detectollision(block15,ground2)
  detectollision(block16,ground2)
  detectollision(block17,ground2)
  detectollision(block18,ground2)
  detectollision(block19,ground2)
  detectollision(block20,ground2)
  detectollision(block21,ground2)
  detectollision(block22,ground2)
  detectollision(block23,ground2)
  detectollision(block24,ground2)

  detectollision(block1,ground3)
  detectollision(block2,ground3)
  detectollision(block3,ground3)
  detectollision(block4,ground3)
  detectollision(block5,ground3)
  detectollision(block6,ground3)
  detectollision(block7,ground3)
  detectollision(block8,ground3)
  detectollision(block9,ground3)
  detectollision(block10,ground3)
  detectollision(block11,ground3)
  detectollision(block12,ground3)
  detectollision(block13,ground3)
  detectollision(block14,ground3)
  detectollision(block15,ground3)
  detectollision(block16,ground3)
  detectollision(block17,ground3)
  detectollision(block18,ground3)
  detectollision(block19,ground3)
  detectollision(block20,ground3)
  detectollision(block21,ground3)
  detectollision(block22,ground3)
  detectollision(block23,ground3)
  detectollision(block24,ground3)

  detectollision(block1,ground4)
  detectollision(block2,ground4)
  detectollision(block3,ground4)
  detectollision(block4,ground4)
  detectollision(block5,ground4)
  detectollision(block6,ground4)
  detectollision(block7,ground4)
  detectollision(block8,ground4)
  detectollision(block9,ground4)
  detectollision(block10,ground4)
  detectollision(block11,ground4)
  detectollision(block12,ground4)
  detectollision(block13,ground4)
  detectollision(block14,ground4)
  detectollision(block15,ground4)
  detectollision(block16,ground4)
  detectollision(block17,ground4)
  detectollision(block18,ground4)
  detectollision(block19,ground4)
  detectollision(block20,ground4)
  detectollision(block21,ground4)
  detectollision(block22,ground4)
  detectollision(block23,ground4)
  detectollision(block24,ground4)

  detectollision(block1,ground5)
  detectollision(block2,ground5)
  detectollision(block3,ground5)
  detectollision(block4,ground5)
  detectollision(block5,ground5)
  detectollision(block6,ground5)
  detectollision(block7,ground5)
  detectollision(block8,ground5)
  detectollision(block9,ground5)
  detectollision(block10,ground5)
  detectollision(block11,ground5)
  detectollision(block12,ground5)
  detectollision(block13,ground5)
  detectollision(block14,ground5)
  detectollision(block15,ground5)
  detectollision(block16,ground5)
  detectollision(block17,ground5)
  detectollision(block18,ground5)
  detectollision(block19,ground5)
  detectollision(block20,ground5)
  detectollision(block21,ground5)
  detectollision(block22,ground5)
  detectollision(block23,ground5)
  detectollision(block25,ground5)

  stroke("black")
  strokeWeight(2)
  fill("skyblue")
  finished_box.display(); 
    //1st pyramid   
    fill("lightBlue");
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   fill("pink");
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   fill("lightGreen");
   block13.display();
   block14.display();
   block15.display();
   fill("black");
   block16.display();
// second pyramid
   fill("lightPink");
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   fill("yellow");
   block22.display();
   block23.display();
   block24.display();
   fill("lightGreen");
   block25.display();
  //bases for the pyramids 
  fill("brown")
   base1.display();
   base2.display();
   ground1.display();
   ground2.display();
   ground3.display();
   ground4.display();
   ground5.display();
left_wall.display();
right_wall.display(); 


imageMode(CENTER);
image(polygon_img , polygon.position.x, polygon.position.y, 40, 40);

slingShot.display();

drawSprites()
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
  //  bird.trajectory= [];
   //  Matter.Body.setPosition(polygon.body, {x:100, y:200});
      slingShot.attach(this.polygon);
  }
}
function detectollision(lBlock,lGround){

  BlockBodyPosition=lBlock.body.position
  GroundBodyPosition=lGround.body.position
  
  var distance=dist(GroundBodyPosition.x, GroundBodyPosition.y, BlockBodyPosition.x, BlockBodyPosition.y)
  if(distance<=lBlock.width+lGround.height)
  {
    Matter.Body.setStatic(lBlock.body,true);
   score=score+1
   
    BlockBodyPosition.x=1100;
    BlockBodyPosition.y=367;

    finished_Blocks=finished_Blocks+1;
  }
}