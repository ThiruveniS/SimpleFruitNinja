let fruits,f1,f2,f3,f4,bact,bac,bac1,knife,knifeAn,gO,gOS,gOI,kniS,edges,fg,rand,bg;
let PLAY = 1;
let END = 0;
let gameState = PLAY;
let score = 0;

function setup(){
  createCanvas(500,500);
  fg = new Group();
  bg = new Group();
  knife = createSprite(250,400,10,30);
  
}


function preload(){
  knifeAn = loadImage("sword.png");
  gOI = loadImage("gameover.png");
  gOS = loadSound("gameover.mp3");
  kniS = loadSound("knifeSwooshSound.mp3");
  f1 = loadImage("fruit1.png");
  f2 = loadImage("fruit2.png");
  f3 = loadImage("fruit3.png");
  f4 = loadImage("fruit3.png");
  bac = loadImage("alien1.png");
  bac1 = loadImage("alien2.png");
}

function fruit(){
 if(frameCount % 60 === 0){
    fruits = createSprite(490,Math.round(random(250,400)),10,10);
    rand = Math.round(random(1,4));
    switch(rand){
      case 1: fruits.addImage("fruit1",f1);
        break;
      case 2: fruits.addImage("fruit2",f2);
        break;
      case 3: fruits.addImage("fruit3",f3);
        break;
      case 4: fruits.addImage("fruit4",f4);
        break;
      default : break;
      
    }
    fruits.scale = 0.3;
    
    if(score % 4 === 0){
      fruits.velocityX -= 4;
    }
   
    fruits.velocityX = -7;
    fruits.lifetime = 500/4;
    
    fg.add(fruits);
}
   
}


function draw(){
  background("lightgreen");
  edges = createEdgeSprites();
 
  
  if(gameState === PLAY){
    knife.x = mouseX;
    knife.y = mouseY;
    knife.bounceOff(edges);
    fruit();
    bacteria();
    if(knife.isTouching(fg)){
      fg.destroyEach();
      score +=1;
      kniS.play();
    }
    if(knife.isTouching(bg)){
      gameState = END;
      score = 0;
    }
    
  }
  knife.addImage("sx",knifeAn);
  knife.scale = 0.5;
  
  if(gameState === END){
    //not so working gOS.play();
    knife.x = knife.x;
    knife.y = knife.y;
    // not working gOS.play();
    gO = createSprite(250,200);
    gO.addImage("ywes",gOI);
    bact.velocityX = 0;
    fruits.velocityX = 0;
    bact.lifetime = -1;
    fruits.lifetime = -1;
  }
  
  
  //console.log(rand);
  drawSprites();
  text("score : " + score,450,50);
}



function bacteria (){
  if(frameCount % 170 === 0){
    bact = createSprite(490,Math.round(random(250,400)),10,10);
    rando = Math.round(random(1,2));
    switch(rando){
      case 1: bact.addImage("dsosd",bac);
        break;
      case 2: bact.addImage("bhwdx",bac1);
        break;
      default : break;
      
    }
    if(score % 10 === 0){
      bact.velocityX -= 4;
    }
    bact.velocityX = -4;
    bact.lifetime = 500/4;
    bg.add(bact);
    
}
  
  
}