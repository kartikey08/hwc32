const Engine= Matter.Engine;
const World= Matter.World;
const Body= Matter.Body;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var polygon,engine,world;
var score=0;
var bg;

function preload(){

}

function setup() {
  createCanvas(1200,400);
 // createSprite(400, 200, 50, 50);

engine = Engine.create();
world = engine.world;

stage1= new Ground(600, 380, 230, 15);
stage2= new Ground(850, 280, 230, 15);
box1=new Boxes(510,357.5,30,30);
box2=new Boxes(540,357.5,30,30);
box3=new Boxes(570,357.5,30,30);
box4=new Boxes(600,357.5,30,30);
box5=new Boxes(630,357.5,30,30);
box6=new Boxes(660,357.5,30,30);
box7=new Boxes(690,357.5,30,30);

l2box1=new BlueBox(540,327.5,30,30);
l2box2=new BlueBox(570,327.5,30,30);
l2box3=new BlueBox(600,327.5,30,30);
l2box4=new BlueBox(630,327.5,30,30);
l2box5=new BlueBox(660,327.5,30,30);

l3box1=new Boxes(570,297.5,30,30);
l3box2=new Boxes(600,297.5,30,30);
l3box3=new Boxes(630,297.5,30,30);

l4box1=new BlueBox(600,267.5,30,30);

l1block1=new Boxes(760,257.5,30,30);
l1block2=new Boxes(790,257.5,30,30);
l1block3=new Boxes(820,257.5,30,30);
l1block4=new Boxes(850,257.5,30,30);
l1block5=new Boxes(880,257.5,30,30);
l1block6=new Boxes(910,257.5,30,30);
l1block7=new Boxes(940,257.5,30,30);

l2block1=new BlueBox(790,227.5,30,30);
l2block2=new BlueBox(820,227.5,30,30);
l2block3=new BlueBox(850,227.5,30,30);
l2block4=new BlueBox(880,227.5,30,30);
l2block5=new BlueBox(910,227.5,30,30);

l3block1=new Boxes(820,197.5,30,30);
l3block2=new Boxes(850,197.5,30,30);
l3block3=new Boxes(880,197.5,30,30);

l4block1=new BlueBox(850,167.5,30,30);

//bbox=new BlueBox(400,100, 30,30);//650,137.5

polygon=new Polygon(200,300,25);

sling= new Slingshot(polygon.body,{x: 200, y:200});

Engine.run(engine);

}

function draw() {

  Engine.update(engine);
 
  rectMode(CENTER);
 
  drawSprites();
 // bgColor();
  background(255,255,255);
 
  textSize(25)
  text("Score: "+score, 750,40);

  stage1.display();  
  stage2.display();  

  //SCORE
  box1.Score();  
  box2.Score();  
  box3.Score();  
  box4.Score();  
  box5.Score();  
  box6.Score();  
  box7.Score();  
 
  l2box1.Score();  
  l2box2.Score();  
  l2box3.Score();  
  l2box4.Score();  
  l2box5.Score();  
 
  l3box1.Score();  
  l3box2.Score();  
  l3box3.Score();  
  
  l4box1.Score();  
  
  l1block1.Score();  
  l1block2.Score();  
  l1block3.Score();  
  l1block4.Score();  
  l1block5.Score();  
  l1block6.Score();  
  l1block7.Score();  
 
  l2block1.Score();  
  l2block2.Score();  
  l2block3.Score();  
  l2block4.Score();  
  l2block5.Score();  
 
  l3block1.Score();  
  l3block2.Score();  
  l3block3.Score();  
  
  l4block1.Score();  

  //DISPLAY
  box1.display();  
  box2.display();  
  box3.display();  
  box4.display();  
  box5.display();  
  box6.display();  
  box7.display();  
 
  l2box1.display();  
  l2box2.display();  
  l2box3.display();  
  l2box4.display();  
  l2box5.display();  
 
  l3box1.display();  
  l3box2.display();  
  l3box3.display();  
  
  l4box1.display();  
  
  l1block1.display();  
  l1block2.display();  
  l1block3.display();  
  l1block4.display();  
  l1block5.display();  
  l1block6.display();  
  l1block7.display();  
 
  l2block1.display();  
  l2block2.display();  
  l2block3.display();  
  l2block4.display();  
  l2block5.display();  
 
  l3block1.display();  
  l3block2.display();  
  l3block3.display();  
  
  l4block1.display();  
    
  sling.display();  

  polygon.display(); 
    
}

  function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
  }

  function mouseReleased(){
    sling.fly();
  }

function keyPressed(){
  if (keyCode===32){
    sling.attach(polygon.body);
  }
}

/*async function bgColor(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  var hour = dateTime.slice(11,13);
  if(hour>=0600 && hour<=1800){
    bg =color(255,255,255);
}
else{
    bg =color(0,0,0);
}
}*/