const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, Matter;
var backgroundImg;
var score = 0;

function preload(){
  imageMode(CENTER);
  image(polygon, position,x,polygon,position,y,40,40);
}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);

  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);

  box9 = new Box(390, 155, 30, 40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:100,y:200});

}

function draw() {
  background(255,255,255); 
  
  noStroke();
  textSize(35);
  fill("white");
  text("score " + score,width-300,50);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();

  drawSprites();
}


function keyPressed(){
  if(keyCode === 32){
  slingshot.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/India");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if (hour>=06 && hour<=19) {
      bg = "yellow";
  }
  else{
      bg = "blue";
  }
  console.log(backgroundImg);
}
function score() {
  if (this.Visiblity<8 && this.Visiblity > -105) {
    score++;
  }
}