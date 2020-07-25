var Engine = Matter.Engine
var World = Matter.World
var Bodies = Matter.Bodies
function setup() {
  engine = Engine.create()
  world =  engine.world
  createCanvas(800,400);
  var jump = {
    restitution: 1.0
  }
  box = Bodies.rectangle(200,50,20,20,jump)
  Matter.World.add(world,box)
  console.log(box)
  var option = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,380,800,30,option)
  Matter.World.add(world,ground)
ball = Bodies.circle(300,50,50,jump)
Matter.World.add(world,ball)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  drawSprites();
  rectMode(CENTER)
  rect (ground.position.x,ground.position.y,800,30)
  rect (box.position.x,box.position.y,20,20)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,90,90)
}