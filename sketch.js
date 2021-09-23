var garden,rabbit,apple,orangeL,redL,greenL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg,greenImg;
var score;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  greenImg = loadImage("leaf.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

score = 0;

//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

apple = createSprite(10000,40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;

orangeL = createSprite(10000,40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;

redL = createSprite(10000,40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06

greenL = createSprite(10000,40, 10, 10);
  greenL.addImage(greenImg);
  greenL.scale=0.07
}


function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   fill("white");
   text("score:"+score,180,20);
  
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

var select_sprites = Math.round(random(1,5));

  
   if (frameCount % 80 == 0) {
     if (select_sprites == 1 || select_sprites == 5) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     }else if(select_sprites == 3){
       createRed();
    }else{
      createGreen();
    }
   }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }
  appleCollect()
  lesspoints()

}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
}
function appleCollect(){
  if (rabbit.isTouching(apple)){
    apple.remove();
    score += 10;
  } 
}
function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
function createGreen() {
  greenL = createSprite(random(50, 350),40, 10, 10);
  greenL.addImage(greenImg);
  greenL.scale=0.07;
  greenL.velocityY = 3;
  greenL.lifetime = 150;
  }

  function lesspoints(){
    if(rabbit.isTouching(greenL) && score != 0){
      greenL.remove();
score -= 10;
    }
    if(rabbit.isTouching(orangeL) && score != 0){
      orangeL.remove();
score -= 10;
    }
    if(rabbit.isTouching(redL) && score != 0){
      redL.remove();
score -= 10;
    }
    if(rabbit.isTouching(redL) && score === 0){
      redL.remove();
    }
    if(rabbit.isTouching(greenL) && score === 0){
      greenL.remove();
    }
    if(rabbit.isTouching(orangeL) && score === 0){
      orangeL.remove();
    }
  }