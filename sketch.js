var PLAY=1
var END=0
var gameState=1;

var alien;

var fruit1,fruit2,fruit3,fruit4;
var gameover;
var sword;
var cutSound;
var goverSound;



function preload()
{
  alien=loadAnimation("alien1.png","alien2.png");
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png")
  sword=loadImage("sword.png");
  gameover=loadImage("gameover.png");
  goverSound=loadSound("gameover.mp3")
  cutSound=loadSound("knifeSwooshSound.mp3")
  
}


function setup()
{
  createCanvas(600, 600);
  score=0
  psword=createSprite(300,300,30,30);
  psword.addImage("sword",sword);
  psword.scale=0.7
  //psword.debug=true;
  psword.setCollider("circle",10,-20,50);
  
  gover=createSprite(300,300)
  gover.addImage("gameover",gameover);
  gover.scale=1;
  gover.visible=false;
  
  fru1Group=new Group();
  fru2Group=new Group();
  fru3Group=new Group();
  fru4Group=new Group();
  germsGroup=new Group();
  frt1Group=new Group();
  frt2Group=new Group();
  frt3Group=new Group();
  frt4Group=new Group();
  germs2Group=new Group();
  
}


function draw(){
  background("skyblue");
  
  textSize=(20)
  text("score:"+score,520,25)
  
  if(gameState===1)
  {
    
    
  psword.x=World.mouseX
  psword.y=World.mouseY
  
   spawnfru1();
   spawnfru2();
   spawnfru3();
  spawnfru4();
    spawngerms();
    spawnfrt1();
    spawnfrt2();
    spawnfrt3();
    spawnfrt4();
    spawngerms2()
    
    if(germsGroup.isTouching(psword))
    {
    gameState=0
       
    }
    
  }
  if (gameState===0)
  {
       
    fru1Group.setVelocityXEach(0);
    fru2Group.setVelocityXEach(0);
    fru3Group.setVelocityXEach(0);
    fru4Group.setVelocityXEach(0);
    germsGroup.setVelocityXEach(0);
    frt1Group.setVelocityYEach(0);
    frt2Group.setVelocityYEach(0);
    frt3Group.setVelocityYEach(0);
    frt4Group.setVelocityYEach(0);
    germs2Group.setVelocityXEach(0);
    
    fru1Group.destroyEach();
    fru2Group.destroyEach();
    fru3Group.destroyEach();
    fru4Group.destroyEach();
    germsGroup.destroyEach();
    frt1Group.destroyEach();
    frt2Group.destroyEach();
    frt3Group.destroyEach();
    frt4Group.destroyEach();
    germs2Group.destroyEach();
    
    psword.visible=false 
    background("black")
    gover.visible=true
  }
  
  if(mousePressedOver(gover))
    {
      gameState=1
      gover.visible=false;
      psword.visible=true;
      score=0
    }
  
  drawSprites();
}


function spawnfru1()
{
  if (frameCount%90===0)
  {
 fru1=createSprite(750,300);
 fru1.addImage("fruit1",fruit1);
 fru1.scale=0.4 ;
 fru1.y=Math.round(random(0,600));
 fru1.velocityX=-(4+score/4) ;  
 fru1.lifetime=170;   
 fru1Group.add(fru1);
  }
  if(fru1Group.isTouching(psword)) 
  {
   fru1Group.destroyEach(); 
   //playSound("knifeSwooshSound.mp3",false)
    score=score+1
    cutSound.play();
  }
}

function spawnfru2()
{
  if (frameCount%130===0)
  {
 fru2=createSprite(750,300);
 fru2.addImage("fruit2",fruit2);
 fru2.scale=0.4 ;
 fru2.y=Math.round(random(0,600));
 fru2.velocityX=-(4+score/4) ;  
 fru2.lifetime=170;   
 fru2Group.add(fru2);
  }
  if(fru2Group.isTouching(psword)) 
  {
   fru2Group.destroyEach(); 
   ///playSound("knifeSwooshSound.mp3",false)
     score=score+1
cutSound.play();
  }
  
  
}

function spawnfru3()
{
  if (frameCount%140===0)
  {
 fru3=createSprite(750,300);
 fru3.addImage("fruit3",fruit3);
 fru3.scale=0.4 ;
 fru3.y=Math.round(random(0,600));
 fru3.velocityX=-(4+score/4) ;  
 fru3.lifetime=170;   
 fru3Group.add(fru3);
  }
  if(fru3Group.isTouching(psword))
  {
   fru3Group.destroyEach(); 
  // playSound("knifeSwooshSound.mp3",false)
     score=score+1
    cutSound.play();
  }
  
  
}

function spawnfru4()
{
  if (frameCount%170===0)
  {
 fru4=createSprite(750,300);
 fru4.addImage("fruit4",fruit4);
 fru4.scale=0.4 ;
 fru4.y=Math.round(random(0,600));
 fru4.velocityX=-(4+score/4) ;  
 fru4.lifetime=170;   
 fru4Group.add(fru4);
  }
  if(fru4Group.isTouching(psword)) 
  {
   fru4Group.destroyEach(); 
   //playSound("knifeSwooshSound.mp3",false)
     score=score+1
    cutSound.play();
  }
  
  
}

function spawngerms()
{
  if (frameCount%100===0)
  {
 germs=createSprite(750,300);
 germs.addAnimation("alien",alien);
 germs.scale=1 ;
 germs.y=Math.round(random(0,600));
 germs.velocityX=-(4+score/10) ;  
 germs.lifetime=200;   
 germsGroup.add(germs);
  }
  if(germsGroup.isTouching(psword)) 
  {
   germsGroup.destroyEach(); 
    gameState=0
  goverSound.play();
  }
  
  
}

function spawnfrt1()
{
  if (frameCount%90===0)
  {
   frt1=createSprite(300,750)
   frt1.addImage("fruit1",fruit1);
 frt1.scale=0.4 ;
    frt1.velocityY=-(4+score/4)
    frt1.x=Math.round(random(0,600));
    frt1.lifetime=170;
    frt1Group.add(frt1);
    
  }
  
  if (frt1Group.isTouching(psword))
    {
      frt1Group.destroyEach();
      score=score+1
      cutSound.play();
    }
}

function spawnfrt2()
{
  if (frameCount%130===0)
  {
   frt2=createSprite(300,750)
   frt2.addImage("fruit2",fruit2);
 frt2.scale=0.4 ;
    frt2.velocityY=-(4+score/4)
    frt2.x=Math.round(random(0,600));
    frt2.lifetime=170;
    frt2Group.add(frt2);
    
  }
  
  if (frt2Group.isTouching(psword))
    {
      frt2Group.destroyEach();
      score=score+1
      cutSound.play();
    }
}


function spawnfrt3()
{
  if (frameCount%110===0)
  {
   frt3=createSprite(300,750)
   frt3.addImage("fruit3",fruit3);
 frt3.scale=0.4 ;
    frt3.velocityY=-(4+score/4)
    frt3.x=Math.round(random(0,600));
    frt3.lifetime=170;
    frt3Group.add(frt3);
    
  }
  
  if (frt3Group.isTouching(psword))
    {
      frt3Group.destroyEach();
      score=score+1
      cutSound.play();
    }
}


function spawnfrt4()
{
  if (frameCount%120===0)
  {
   frt4=createSprite(300,750)
   frt4.addImage("fruit4",fruit4);
 frt4.scale=0.4 ;
    frt4.velocityY=-(4+score/4)
    frt4.x=Math.round(random(0,600));
    frt4.lifetime=170;
    frt4Group.add(frt4);
    
  }
  
  if (frt4Group.isTouching(psword))
    {
      frt4Group.destroyEach();
      score=score+1
      cutSound.play();
    }
}


function spawngerms2()
{
  if (frameCount%120===0)
    {
      germs2=createSprite(300,750)
      germs2.addAnimation("alien",alien);
      germs2.scale=1 ;
      germs2.velocityY=-(4+score/10);
      germs.y=Math.round(random(0,600));
      germs.lifetime=200
      germs2Group.add(germs2);
    }
  if(germs2Group.isTouching(psword))
    {
      germs2Group.destroyEach();
      gameState=0
      goverSound.play();
    }
  
  
}