//name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint

var engine,world;
var plinkos=[];
var divisions=[];
var particles=[];
var particle,division,plinko1,plinko2,plinko3,plinko4
var divisionHeight=300;

function setup() {
  engine=Engine.create();
  world= engine.world;

  

  world.gravity.y=3;

  createCanvas(480,800);

  ground= new Ground(240,790,width,20)

  //division= new Divisions(10,685,20,200);
  //plinko= new Plinko(200,400,20)
  //particle=new Particle(200,400,5); 
  spawnDivisions();

  for(var l=40; l<=width;l=l+50){
    plinko1= new Plinko(l,75,10);
    plinkos.push(plinko1)
    plinko3= new Plinko(l,275,10);
    plinkos.push(plinko3)
  }
  for(var l=15; l<=width-10;l=l+50){
    plinko2= new Plinko(l,175,10);
    plinkos.push(plinko2)
    plinko4= new Plinko(l,375,10);
    plinkos.push(plinko4)
  }
 //bounds= new Division(0,height/2,10,height);
  
}

function draw() {
  Engine.update(engine);
  background(1);
  if(frameCount%60===0){
    spawnParticle();
  }

  ground.display();
  //particle.display();
  //plinko.display(); 
  //division.display();
 for(var p=0; p<particles.length; p++){
    particles[p].display();
 }

 for(var d=0; d<divisions.length; d++){
   divisions[d].display();
 }
 for(var k=0; k<plinkos.length; k++){
   plinkos[k].display();  
 }
}

function spawnParticle(){
  particle= new Particle(random(width/2-10,width/2+10),10,10)
  particles.push(particle)
}

function spawnDivisions(){
  for(var i=0; i<=width; i=i+80){
    division= new Division(i,height-divisionHeight/2,10,divisionHeight);
    divisions.push(division);
  }
 

  //drawSprites();
}
