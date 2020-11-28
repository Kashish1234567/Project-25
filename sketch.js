
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;


function preload(){
	

}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(200,100,20,{restitution:0.3,friction:0.5,density:1.2});
	ball.image=loadImage("paper.png");

	World.add(world,ball);

   
  

   dustPos = width/2-100;
	 dustY = 610;
	

	//dustbase=createSprite(boxPos+100,boxY+40,200,20);
	//dustbase.shapeColor="red";

	dustbasebody = Bodies.rectangle(dustPos+100, dustY+45-20, 200, 20, {isStatic:true});
	World.add(world, dustbasebody);

	dustbasebody.image=loadImage("dustbin.png");

	//dustLeft=createSprite(boxPos+200,boxY-0.1,20,100);
	//dustLeft.shapeColor="red";
	
	//dustLeftbody = Bodies.rectangle(boxPos+300, boxY+45-20, 20, 210, {isStatic:true});
    //World.add(world,boxLeftbody);

	/*boxRight=createSprite(boxPos,boxY-0.1,20,100);
	boxRight.shapeColor="red";
	
	boxRightbody = Bodies.rectangle(boxPos+300, boxY+45-20, 20, 210, {isStatic:true});
	World.add(world,boxRightbody);*/


  ground = Bodies.rectangle(width/2, height, 1600, 10 , {isStatic:true} );
	World.add(world, ground);
  
   



	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  image(ball.image,ball.position.x,ball.position.y,70,70);

  ground.display();
  
   
  image(dustbasebody.image,dustbasebody.position.x,350,200,300);
     

  drawSprites();
 
}



