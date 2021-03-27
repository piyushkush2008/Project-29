const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground1,ground2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box9,box10,box11,
box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,
box25,Polygon,Polygon_image,chain;

function preload(){

Polygon_image=loadImage("polygon.png")

}

function setup() {
  createCanvas(800,700);
  
  engine = Engine.create();
  world = engine.world;

  ground= new Ground(400,580,1000,20)
  miniG= new Ground(640,350,220,20)
  miniG2= new Ground(390,450,250,20)

 box1=new Box(300,440,30,30)
 box2=new Box2(330,440,30,30)
 box3=new Box(360,440,30,30)
 box4=new Box2(390,440,30,30)
 box5=new Box(420,440,30,30)
 box6=new Box2(450,440,30,30)
 box7=new Box(480,440,30,30)

  box8=new Box2(330,235,30,30)
  box9=new Box(360,235,30,30)
  box10=new Box2(390,235,30,30)
  box11=new Box(420,235,30,30)
  box12=new Box2(450,235,30,30)

  box13=new Box(360,365,30,30)
  box14=new Box2(390,365,30,30)
  box15=new Box(420,365,30,30)

  box16=new Box2(390,335,30,30)


  box17=new Box(590,340,30,30)
  box18=new Box2(620,340,30,30)
  box19=new Box(645,340,30,30)
  box20=new Box2(675,340,30,30)
  box21=new Box(705,340,30,30)

  box22=new Box2(620,310,30,30)
  box23=new Box(650,310,30,30)
  box24=new Box2(680,310,30,30)

  box25=new Box(648,170,30,30)

  Polygon=Bodies.circle(50,200,20)
  World.add(world,Polygon)

  chain=new Chain(Polygon,{x:150,y:200})

}

function draw() {
  background("blue");
  Engine.update(engine);
  ground.display()

  miniG.display()
  miniG2.display()

 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()

  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  box13.display()
  box14.display()
  box15.display()

  box16.display()

  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()

  box22.display()
  box23.display()
  box24.display()

  box25.display()

  
  chain.display();

  fill("gold")
  imageMode(CENTER)
  image(Polygon_image,Polygon.position.x,Polygon.position.y,40,40)
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(Polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
chain.fly()
}