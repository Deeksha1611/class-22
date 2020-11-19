const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld, ground,earth;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create(); //.world
  myworld = myengine.world;

  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,380,400,40,ground_options);
  World.add(myworld,ground);
 
  var wall = {
    restitution:0.7
  }
  earth = Bodies.circle(200,50,30,wall);
  World.add(myworld,earth);
  //console.log(ground.position.x);
}

function draw() {
  background("lightgreen"); 
  
  Engine.update(myengine);

  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,40);

  fill("blue");
  ellipseMode(RADIUS);
  ellipse(earth.position.x,earth.position.y,30,30);
}