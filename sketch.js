var paper;
var bottom_rectangle, left_rectangle, right_rectangle;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	paper = new Paper();
    bottom_rectangle = new Rectangle(601,644,200,20);
	left_rectangle = new Rectangle(492,604,20,100);
	right_rectangle = new Rectangle(708,604,20,100);
    ground = new Ground();
    
    Engine.run(engine);
   
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  bottom_rectangle.display(); 
  left_rectangle.display(); 
  right_rectangle.display();
  ground.display();

  keyPressed();

}

function keyPressed(){
	force = Matter.Body.applyForce;
	if(keyDown("up")){
		force(paper.body,paper.body.position,{x:8,y:-18});
	}
}

