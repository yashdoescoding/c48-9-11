var purpleGhost, purpleGhostImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22;
var greenGhost, greenGhostImg, redGhost, redGhostImg, purpleGhost, purpleGhostImg, blueGhost, blueGhostImg;
var score;
var strawberry, strawberryImg, cherry, cherryImg, coin, coinImg;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, coin15, coin16, coin17, coin18, coin19, coin20, coin21, coin22, coin23, coin24, coin25, coin26, coin27, coin28, coin29, coin30
var edges;
var position = []
function preload() {
  playerImg = loadAnimation("images/player.png", "images/playerEating.png");
  purpleGhostImg = loadImage("images/purpleGhost.png");
  greenGhostImg = loadImage("images/greenGhost.png");
  redGhostImg = loadImage("images/redGhost.png");
  blueGhostImg = loadImage("images/blueGhost.png");

  strawberryImg = loadImage("images/strawberry.png")
  cherryImg = loadImage("images/cherry.png")
  coinImg = loadImage("images/playerEating.png")

}


function setup() {
  createCanvas(430, 400);
edges = createEdgeSprites();
  player = createSprite(16, 16, 10, 10);
  player.addAnimation("pacman", playerImg)
position = []
  greenGhost = createSprite(375, 180)
  greenGhost.addImage(greenGhostImg)
  greenGhost.scale = 0.06

  purpleGhost = createSprite(10, 300)
 purpleGhost.addImage(purpleGhostImg)
  purpleGhost.scale = 0.16

  score = 0;

  coin1 = createSprite(15, 55, 5, 5)
  coin1.addImage(coinImg)
  coin1.scale = 0.015

  coin2= createSprite(15, 75, 5, 5)
  coin2.addImage(coinImg)
  coin2.scale = 0.015

  coin3 = createSprite(15, 95, 5, 5)
  coin3.addImage(coinImg)
  coin3.scale = 0.015

  coin4 = createSprite(15, 115, 5, 5)
  coin4.addImage(coinImg)
  coin4.scale = 0.015

  coin5 = createSprite(15, 135, 5, 5)
  coin5.addImage(coinImg)
  coin5.scale = 0.015

  coin6 = createSprite(35, 135, 5, 5)
  coin6.addImage(coinImg)
  coin6.scale = 0.015

  coin7 = createSprite(55, 135, 5, 5)
  coin7.addImage(coinImg)
  coin7.scale = 0.015

  coin8 = createSprite(75, 135, 5, 5)
  coin8.addImage(coinImg)
  coin8.scale = 0.015

  coin9 = createSprite(95, 135, 5, 5)
  coin9.addImage(coinImg)
  coin9.scale = 0.015

  coin10 = createSprite(115, 135, 5, 5)
  coin10.addImage(coinImg)
  coin10.scale = 0.015

  coin11 = createSprite(135, 135, 5, 5)
  coin11.addImage(coinImg)
  coin11.scale = 0.015

  coin12 = createSprite(155, 135, 5, 5)
  coin12.addImage(coinImg)
  coin12.scale = 0.015

 coin13 = createSprite(175, 135, 5, 5)
  coin13.addImage(coinImg)
  coin13.scale = 0.015

  coin14 = createSprite(195, 135, 5, 5)
  coin14.addImage(coinImg)
  coin14.scale = 0.015

  coin15 = createSprite(215, 135, 5, 5)
  coin15.addImage(coinImg)
  coin15.scale = 0.015

  coin16 = createSprite(240, 135, 5, 5)
  coin16.addImage(coinImg)
  coin16.scale = 0.015

  coin17 = createSprite(240, 155, 5, 5)
  coin17.addImage(coinImg)
  coin17.scale = 0.015

  coin18 = createSprite(240, 175, 5, 5)
  coin18.addImage(coinImg)
  coin18.scale = 0.015

  coin19 = createSprite(240, 195, 5, 5)
  coin19.addImage(coinImg)
  coin19.scale = 0.015

  coin20 = createSprite(240, 215, 5, 5)
  coin20.addImage(coinImg)
  coin20.scale = 0.015

  coin21 = createSprite(240, 235, 5, 5)
  coin21.addImage(coinImg)
  coin21.scale = 0.015

  coin22 = createSprite(240, 255, 5, 5)
  coin22.addImage(coinImg)
  coin22.scale = 0.015
  player.scale=0.04
  wall1 = createSprite(50, 50, 20, 100);
  wall1.shapeColor = 'orange';

  wall2 = createSprite(115, 110, 150, 20);
  wall2.shapeColor = 'red';

  wall3 = createSprite(200, 95, 20, 50);
  wall3.shapeColor = 'orange';

  wall4 = createSprite(65, 160, 210, 20);
  wall4.shapeColor = 'red';

  wall5 = createSprite(215, 200, 20, 100);
  wall5.shapeColor = 'orange';

  wall6 = createSprite(205, 250, 100, 20);
  wall6.shapeColor = 'red';

  wall7 = createSprite(160, 60, 100, 20);
  wall7.shapeColor = 'red';

wall8 = createSprite(265, 278, 20, 75);
  wall8.shapeColor = 'orange';

  wall9 = createSprite(175, 300, 100, 20);
  wall9.shapeColor = 'red';

  wall10 = createSprite(350, 210, 100, 20);
  wall10.shapeColor = 'red';

  wall11 = createSprite(310, 280, 20, 120);
  wall11.shapeColor = 'orange';

  wall12 = createSprite(195, 350, 250, 20);
  wall12.shapeColor = 'red';

  wall13 = createSprite(80, 297, 20, 85);
  wall13.shapeColor = 'orange';

  wall14 = createSprite(50, 265, 40, 20);
  wall14.shapeColor = 'red';

  wall15 = createSprite(120, 205, 100, 20);
  wall15.shapeColor = 'red';

  wall16 = createSprite(325, 20, 20, 40);
  wall16.shapeColor = 'red';

  wall17 = createSprite(290, 50, 90, 20);
  wall17.shapeColor = 'orange';

  wall18 = createSprite(255, 85, 20, 50);
  wall18.shapeColor = 'red';

  wall19 = createSprite(302, 100, 75, 20);
  wall19.shapeColor = 'orange';

  wall20 = createSprite(350, 115, 20, 50);
  wall20.shapeColor = 'red';

  wall21 = createSprite(310, 150, 100, 20);
  wall21.shapeColor = 'orange';

  wall22 = createSprite(270, 185, 20, 50);
  wall22.shapeColor = 'red';
  
}

function draw() {
  background(0);
  text(mouseX + " " + mouseY, 50, 50);
  textSize(15);
  fill (255)
  text("Score:" + score, 360, 15)
  


  if (player.isTouching(coin1)) {
    coin1.destroy();
    score++;
  }

  if (player.isTouching(coin2)) {
    coin2.destroy();
    score++;
  }

  if (player.isTouching(coin3)) {
    coin3.destroy();
    score++;
  }

  if (player.isTouching(coin4)) {
    coin4.destroy();
    score++;
  }

  if (player.isTouching(coin5)) {
    coin5.destroy();
    score++;
  }

  if (player.isTouching(coin6)) {
    coin6.destroy();
    score++;
  }

  if (player.isTouching(coin7)) {
    coin7.destroy();
    score++;
  }

  if (player.isTouching(coin8)) {
    coin8.destroy();
    score++;
  }

  if (player.isTouching(coin9)) {
    coin9.destroy();
    score++;
  }
  if (player.isTouching(coin10)) {
    coin10.destroy();
    score++;
  }
  if (player.isTouching(coin11)) {
    coin11.destroy();
    score++;
  }
  if (player.isTouching(coin12)) {
    coin12.destroy();
    score++;
  }
  if (player.isTouching(coin13)) {
    coin13.destroy();
    score++;
  }
    if (player.isTouching(coin14)) {
    coin14.destroy();
    score++;
  }
  if (player.isTouching(coin15)) {
    coin15.destroy();
    score++;
  }
  if (player.isTouching(coin16)) {
    coin16.destroy();
    score++;
  }
  if (player.isTouching(coin17)) {
    coin17.destroy();
    score++;
  }
   if (player.isTouching(coin18)) {
    coin18.destroy();
    score++;
  }
  if (player.isTouching(coin19)) {
    coin19.destroy();
    score++;
  }
  if (player.isTouching(coin20)) {
    coin20.destroy();
    score++;
  }
  // if (player.isTouching(coin21)) {
  //   coin21.destroy();
  //   score++;
  // }
  // if (player.isTouching(coin22)) {
  //   coin22.destroy();
  //   score++;
  // }
  if (keyDown("W")) {
    player.setVelocity(0, -2);
  }

  if (keyDown("S")) {
    player.setVelocity(0, 2);
  }

  if (keyDown("A")) {
    player.setVelocity(-2, 0);
  }

  if (keyDown("D")) {
    player.setVelocity(2, 0);
  }

  purpleGhost.setVelocity(0,-2)

createEdgeSprites()
player.bounceOff(edges);
player.bounceOff(wall1);
player.bounceOff(wall2);
player.bounceOff(wall3);
player.bounceOff(wall4);
player.bounceOff(wall5);
player.bounceOff(wall6);
player.bounceOff(wall7);
player.bounceOff(wall8);
player.bounceOff(wall9);
player.bounceOff(wall10);
player.bounceOff(wall11);
player.bounceOff(wall12);
player.bounceOff(wall13);
player.bounceOff(wall14);
player.bounceOff(wall15);
player.bounceOff(wall16);
player.bounceOff(wall17);
player.bounceOff(wall18);
player.bounceOff(wall19);
player.bounceOff(wall20);
player.bounceOff(wall21);
  player.bounceOff(wall22);

  purpleGhost.bounceOff(edges);
  purpleGhost.bounceOff(wall1);
  purpleGhost.bounceOff(wall2);
  purpleGhost.bounceOff(wall3);
  purpleGhost.bounceOff(wall4);
  purpleGhost.bounceOff(wall5);
  purpleGhost.bounceOff(wall6);
  purpleGhost.bounceOff(wall7);
  purpleGhost.bounceOff(wall8);
  purpleGhost.bounceOff(wall9);
  purpleGhost.bounceOff(wall10);
  purpleGhost.bounceOff(wall11);
  purpleGhost.bounceOff(wall12);
  purpleGhost.bounceOff(wall13);
  purpleGhost.bounceOff(wall14);
  purpleGhost.bounceOff(wall15);
  purpleGhost.bounceOff(wall16);
  purpleGhost.bounceOff(wall17);
  purpleGhost.bounceOff(wall18);
  purpleGhost.bounceOff(wall19);
  purpleGhost.bounceOff(wall20);
  purpleGhost.bounceOff(wall21);
  purpleGhost.bounceOff(wall22);


  drawSprites();
}