var bgImg,bg
var mImg ,mImg2, mImg3 , m
var cImg ,cImg2,cImg3, c
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    mImg = loadAnimation("mouse1.png")
    mImg2 = loadAnimation("mouse2.png","mouse3.png")
    mImg3 = loadAnimation("mouse4.png")
    cImg = loadAnimation("cat1.png")
    cImg2 = loadAnimation("cat2.png","cat3.png")
    cImg3 = loadAnimation("cat4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg = createSprite(500,500)
    bg.addImage(bgImg);

    m = createSprite(100,700);
    m.addAnimation("mouse",mImg)
    m.scale = 0.17
    c = createSprite(900,700)
    c.addAnimation("cat",cImg)
    c.scale = 0.17

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(c.x-m.x < (c.width-m.width)/2){
        m.addAnimation("mouse",mImg3)
        m.scale = 0.17
        c.addAnimation("cat",cImg3)
        c.scale = 0.17
        c.velocityX = 0
        c.x = 200
    }

keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT_ARROW")){
    m.addAnimation("mouse",mImg2)
m.scale = 0.17
m.frameDelay = 25
c.addAnimation("cat",cImg2)
c.scale = 0.2
c.frameDelay = 25
c.velocityX = -3
}

}
