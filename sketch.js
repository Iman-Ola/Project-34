
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball
var ground;
var left
var right
var top_wall
var plat
var plat2
var plat3
var plat4
var plat5
var plat6
var plat7
var plat8
var plat9
var plat10

function setup() {
  createCanvas(400,600);

  ground = new Ground(200,200,20,900);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  plat = new Ground(30,550,20,20);
  plat2 = new Ground(130,500,20,20);
  plat3 = new Ground(230,450,20,20);
  plat4 = new Ground(330,400,20,20);
  plat5 = new Ground(230,350,20,20);
  plat6 = new Ground(330,300,20,20);
  plat7 = new Ground(230,250,20,20);
  plat8 = new Ground(130,200,20,20);
  plat9 = new Ground(230,150,20,20);
  plat10 = new Ground(330,50,20,20);

  var ball_options = {
    restitution:0.85
  }
  ball = Bodies.circle(300,200,30,ball_options);
  World.add(world,ball);


  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER)
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  plat.show();
  plat2.show();
  plat3.show();
  plat4.show();
  plat5.show();
  plat6.show();
  plat7.show();
  plat8.show();
  plat9.show();
  plat10.show();


  ellipse(ball.position.x, ball.position.y, 20);
  Engine.update(engine);
  
}

