var engine,world
var paper,ground,box_bottom,box_left,box_right
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,650,40,40);
	

	ground = new Ground(400,700)
	Engine.run(engine);
  
	box_bottom = createSprite(650,680,200,20)
	box_bottom.shapeColor = color(255,0,0)

	box_left = createSprite(550,640,20,100)
	box_left.shapeColor = color(255,0,0)
	
	box_right = createSprite(750,640,20,100)
	box_right.shapeColor = color(255,0,0)

	box_bottom = Bodies.rectangle(650, 680, 200, 20 , {isStatic:true} )
	World.add(world, box_bottom);

	box_left = Bodies.rectangle(550,640,20,100, {isStatic:true} )
	World.add(world, box_left);

	box_right = Bodies.rectangle(750,640,20,100, {isStatic:true} )
	World.add(world, box_right);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
 Keypressed();
  drawSprites();
 
}

function Keypressed()
{
	if (keyCode === UP_ARROW)
	{
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-10});		
	}
}