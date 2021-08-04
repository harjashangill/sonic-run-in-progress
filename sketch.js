var sonic, sonicImg
var eggman, eggmanImg
var GreenHill,GreenHillImg
var obstacles
var mine,mineImg
var rings,ringsImg
var spikes, spikesImg
var spikes2, spikes2Img
var ringsGroup
var eggmanGroup
var spikesGroup
var spikes2Group
var mineGroup
var invisibleGround
var Gamestate = "start"
var gameOver,gameOverImg
var restart,restartImg

var score = 0


function preload(){
sonicImg = loadAnimation("sonic4.png","sonic3.png","sonic2.png","sonic.png")
eggmanImg = loadImage("Dr._Eggman.png")
GreenHillImg = loadImage("Green_Hill.png")
mineImg = loadImage("Mine.png")
ringsImg = loadAnimation("ring1.png","ring2.png","ring3.png","ring4.png")
spikesImg = loadImage("Spikes.png")
spikes2Img = loadImage("Spikes2.png")
gameOverImg = loadImage("gameover.png")
restartImg = loadImage("restart.png")

    
}



function setup() {
    createCanvas(1000,600)

    GreenHill = createSprite(200,300,20,20)
    GreenHill.addImage(GreenHillImg)
    GreenHill.scale = 2.5
    GreenHill.x = width/2
    GreenHill.velocityX = -6


    sonic = createSprite(100,470,20,20) 
    sonic.addAnimation("running",sonicImg)
    sonic.scale = 0.3 
    
    restart = createSprite(450,400,20,20)
    restart.addImage(restartImg)
    gameOver = createSprite(450,300,20,20)
    gameOver.addImage(gameOverImg)
    restart.scale = 0.5
    gameOver.scale= 0.7
    restart.visible= false
    gameOver.visible= false
   



    ringsGroup = new Group()
    eggmanGroup = new Group()
    spikesGroup = new Group()
    spikes2Group = new Group()
    mineGroup = new Group()
   

}


function draw() {
background(200)
if(Gamestate == "start"){
    spawnObstacles()
    fill ("red")
    text("SCORE: "+score,800,500)
    GreenHill.velocityX = -6
if(keyDown("SPACE")){
      sonic.velocityY = -10;
       
    }  
    sonic.velocityY = sonic.velocityY + 0.5
    invisibleGround = createSprite(100,530,90,5)
    invisibleGround.visible = false
    sonic.collide(invisibleGround)
  

if (GreenHill.x < -200){
    GreenHill.x = GreenHill.width/2

 }
 if(mineGroup.isTouching(sonic)||eggmanGroup.isTouching(sonic)||spikesGroup.isTouching(sonic)||spikes2Group.isTouching(sonic)){
     Gamestate = "end"
 }
 
} else if(Gamestate == "end"){
    sonic.velocityY=0
    GreenHill.velocityX=0
    mineGroup.destroyEach()
    ringsGroup.destroyEach()
    spikes2Group.destroyEach()
    spikesGroup.destroyEach()
    eggmanGroup.destroyEach()
    
   
    gameOver.visible = true
    restart.visible = true
    
    if(mousePressedOver(restart)) {
        reset();
    }
    

}
drawSprites();
}


function spawnObstacles(){

    if(frameCount % 40 === 0){
        rings = createSprite(500,470,20,20)
        rings.addAnimation("spinning",ringsImg)
        rings.y = Math.round(random(470,350))
        rings.lifetime = 250
        ringsGroup.add(rings)
        rings.velocityX = -6
        rings.scale = 0.5
        rings.debug = true
        rings.setCollider("circle", 0,0, 50)
    }
    if(frameCount % 270 === 0){
        eggman = createSprite(500,470,20,20)
        eggman.addImage(eggmanImg)
        eggman.y = Math.round(random(350,370))
        eggman.lifetime = 250
        eggmanGroup.add(eggman)
        eggman.scale = 0.2
        eggman.velocityX = -2
        eggman.debug = true
        eggman.setCollider("circle",0,0,90)
    }
    if(frameCount % 130 === 0){
        mine = createSprite(500,470,20,20)
        mine.addImage(mineImg)
        mine.y = Math.round(random(470,350))
        mine.lifetime = 250
        mineGroup.add(mine)
        mine.scale = 0.3
        mine.velocityX = -5
        mine.debug = true
        mine.setCollider("circle",0,0,70)

  
}
    if(frameCount % 410 === 0){
        spikes = createSprite(510,510,20,20)
        spikes.addImage(spikesImg)
        spikes.y = Math.round(random(510,510.1))
        spikes.lifetime = 250
        spikesGroup.add(spikes)
        spikes.scale = 0.3
        spikes.velocityX = -3
        spikes.debug = true
        spikes.setCollider("rectangle",0,0,50,50)
}
    if(frameCount % 650 === 0){
        spikes2 = createSprite(510,510,20,20)
        spikes2.addImage(spikes2Img)
        spikes2.y = Math.round(random(510,510.1))
        spikes2.lifetime = 250
        spikes2Group.add(spikes2)
        spikes2.scale = 0.3
        spikes2.velocityX = -4
        spikes2.debug = true
        spikes2.setCollider("circle",0,0,50)
        
        

}
}
function reset(){
    
       
        sonic.x = 100
        sonic.y = 470
        gameOver.visible = false
        restart.visible = false
        GameState = "start";
        
        

        score = 0;
        
      
}