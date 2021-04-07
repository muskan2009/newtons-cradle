
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function preload()
{
	rope1=rope (bobObject1.body,roofObject.body,-bobDiameter*2,0)
    rope2=rope (bobObject2.body,roofObject.body,-bobDiameter*2,0)
    rope3=rope (bobObject3.body,roofObject.body,-bobDiameter*2,0)
	rope4=rope (bobObject1.body,roofObject.body,-bobDiameter*2,0)
	rope5=rope (bobObject5.body,roofObject.body,-bobDiameter*2,0)

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



