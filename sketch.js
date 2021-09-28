
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

radius = 26;


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	};

	//Create the Bodies Here.
	groundObj = new Ground(400,600,2500,10);
	leftSide = new Ground(700,600,10,100);
	rightSide = new Ground(850,600,10,100);

	//balls = new ball(400,200,300,10);


	ball = Bodies.circle(220,100,radius/2,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  

 // if(keyCode === UP_ARROW){
	  //hForce();
	  
 // }
 // if(keyCode === DOWN_ARROW){
	//  vForce();
 // }

  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  
  
  drawSprites();
 
}
//function hForce(){
	//Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
//}
//function vForce(){
	//Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
//}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0,y:-1});
	}
}





