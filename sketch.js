const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Ground1 = new Ground(200,700,500,100);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Ground1.display();
}