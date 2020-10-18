const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var engine
var world
var box1,box2,box3,box4,box5;
var ball1;
var rope1;
function setup() {
  createCanvas(1200,800);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(600,790,1200,20)
  box1= new Box(700,780,70,70)
  box2= new Box(700,750,70,70)
  box3= new Box(700,720,70,70)
  box4= new Box(700,680,70,70)
  box5= new Box(700,650,70,70)
  ball1= new Ball(200,200,80)
  rope1= new Rope(ball1.body,{x:500,y:50})
}
function draw(){
  background("white")
  Engine.update(engine)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball1.display();
  rope1.display();
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
//rope1.fly ();
}