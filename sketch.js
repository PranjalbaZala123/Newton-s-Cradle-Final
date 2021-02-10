
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
	


var world, engine, canvas;
var bob1, bob2, bob3, bob4, bob5;
var sling1, sling2, sling3, sling4, sling5;
var roof;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	bob1 = new Bob(250, 400, "red");
	bob2 = new Bob(310, 400, "green");
	bob3 = new Bob(370, 400,"blue");
	bob4 = new Bob(430, 400, "yellow");
	bob5 = new Bob(490, 400, "white");
  
	sling1 = new Sling(bob1.body, { x: 250, y: 150 });
	sling2 = new Sling(bob2.body, { x: 310, y: 150 });
	sling3 = new Sling(bob3.body, { x: 370, y: 150 });
	sling4 = new Sling(bob4.body, { x: 430, y: 150 });
	sling5 = new Sling(bob5.body, { x: 490, y: 150 });


	roof = new Roof(200,100,50,50);
  }
  
  function draw() {
	background("purple");
	Engine.update(engine);
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();


	drawSprites();
  }
  
  function mouseDragged() {
	Matter.Body.setPosition(bob1.body, { x: mouseX, y: mouseY });
  }
	
	Engine.run(engine);




