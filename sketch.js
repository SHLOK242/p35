const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var ground1,ground2


function setup() {
  createCanvas(1600,600);
 engine=Engine.create()
 world=engine.world

ground1=new Ground(800,580,1600,20)
ground2=new Ground(1300,400,400,20)

box1=new Box(1150,350,50,50)
box2=new Box(1200,350,50,50)
box3=new Box(1250,350,50,50)
box4=new Box(1300,350,50,50)
box5=new Box(1350,350,50,50)
box6=new Box(1400,350,50,50)
box7=new Box(1450,350,50,50)
box8=new Box(1200,300,50,50)
box9=new Box(1250,300,50,50)
box10=new Box(1300,300,50,50)
box11=new Box(1350,300,50,50)
box12=new Box(1400,300,50,50)
box13=new Box(1250,250,50,50)
box14=new Box(1300,250,50,50)
box15=new Box(1350,250,50,50)
box16=new Box(1300,200,50,50)
plinko1=new Plinko(200,400,50)

slingshot1=new SlingShot(plinko1.body,{x:200,y:300})
}

function draw() {
  background(255);  
  Engine.update(engine)
  drawSprites();
  fill ("blue")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  fill("green")
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  fill("red")
  box13.display()
  box14.display()
  box15.display()
  fill("yellow")
  box16.display()
  ground1.display()
  ground2.display()

  plinko1.display()

  slingshot1.display()
}

function mouseDragged(){
      Matter.Body.setPosition(plinko1.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly()
 
}

function keyPressed(){
  if(keyCode === 32){
     slingshot1.attach(plinko1.body);
  }}