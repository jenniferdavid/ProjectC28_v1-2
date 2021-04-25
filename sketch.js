const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var dustbinObj, paperObject,groundObject
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(414,236,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj = new Dustbin(1070,500);

	launcherObject = new launcher(paperObject.body, {x:414, y:236});

	x = 1070
	y = 500
	dustbinWidth=200;
	dustbinHeight=200;
	wallThickness=20;
	
	leftWallBody=Bodies.rectangle(x-dustbinWidth/2, y-dustbinHeight/2, wallThickness, dustbinHeight, {isStatic:true})
	World.add(world, leftWallBody);

	bottomBody=Bodies.rectangle(x, y, dustbinWidth, wallThickness, {isStatic:true})
	World.add(world, bottomBody);

	rightWallBody=Bodies.rectangle(x+dustbinWidth/2, y-dustbinHeight/2, wallThickness, dustbinHeight, {isStatic:true})
	World.add(world, rightWallBody);
	
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
  text(mouseX+','+mouseY,mouseX,mouseY)
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  launcherObject.display();
}

function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}