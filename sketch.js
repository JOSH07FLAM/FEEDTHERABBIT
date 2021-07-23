var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("leaf.png")
  orangeImg = loadImage("orangeleaf.png")
  redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x = World.mouseX
  drawSprites();
  var rand = Math.round (random(1,4))
  if (frameCount%80===0){
  if (rand===1){
    createApples ();
  }
  else if (rand===2){
    createLeaf ()
  }
  else if (rand===3){
    createorangeleaf ()
  }
  else if (rand===4){
    createRed ()
  }
}
}
function createApples (){
  apple = createSprite (random(50,350),40,10,10)
  apple.addImage (appleImg)
  apple.scale = 0.07
  apple.velocityY = 3;
  apple.lifetime = 150;
}
  
function createLeaf (){
  leaf = createSprite (random(50,350),40,10,10)
  leaf.addImage (leafImg)
  leaf.scale = 0.07
  leaf.velocityY = 3;
  leaf.lifetime = 150;
}
function createorangeleaf (){
  orangeleaf = createSprite (random(50,350),40,10,10)
  orangeleaf.addImage (orangeImg)
  orangeleaf.scale = 0.07
  orangeleaf.velocityY = 3;
  orangeleaf.lifetime = 150;
}
function createRed (){
  Redl = createSprite (random(50,350),40,10,10)
  Redl.addImage (redImg)
  Redl.scale = 0.07
  Redl.velocityY = 3;
  Redl.lifetime = 150;
}