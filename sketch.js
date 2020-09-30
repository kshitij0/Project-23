var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

var packageBody,ground;

var rec1,rec2,rec3,rec1Body,rec2Body,rec3Body;

const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")

	packageIMG=loadImage("package.png")
}

function setup() {

	createCanvas(800, 700);

	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 


	

	var options={
		isStatic:true
	}
		
	rec1=createSprite(width/2,650,200,20)
	rec1.shapeColor=color(255,0,0)

	rec2=createSprite(490,600,20,100)
	rec2.shapeColor=color(255,0,0)

	rec3=createSprite(290,605,20,110)
	rec3.shapeColor=color(255,0,0)


 
	rec1Body=Bodies.rectangle(width/2,650,200,20,options)
	World.add(world,rec1Body);

	rec2Body=Bodies.rectangle(490,600,20,100,options)
	World.add(world,rec2Body);

	rec3Body=Bodies.rectangle(290,605,20,110,options)
	World.add(world,rec2Body);

	Engine.run(engine);

  
}


function draw() {

  rectMode(CENTER);

  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.collide(rec1);
  packageSprite.collide(rec2);
  packageSprite.collide(rec3);
  
   
  

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false)
    
  }
}
