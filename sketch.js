var SasutoUzuha;
var SasutoUzuhaImg;
var Gaara, Yugito, Yagura, Roshi, Han, Utakata, Fuu, KillerBee, Naruto, Obito;
var GaaraImg, YugitoImg, YaguraImg, RoshiImg, HanImg, UtakataImg, FuuImg, KillerBeeImg, NarutoImg, ObitoImg, JinchurikiGroup;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wallsGroup;
var NPC, PC;
var NPCImg, PCImg;
var chakra, chakraGrp, chakraImg;
var playerScore;
var enemyScore;
var edges;
var backgroundSound, WinSound, LoseSound;
var logo, logoImg;
var JinchurikiAttack, SasutoUzuhaAttack;
var JinchurikiAttackImg, SasutoUzuhaAttackImg;
var blank;
function setup() {
  createCanvas(1800,900);
  playerScore = 0;
  enemyScore = 0;
  SasutoUzuha = createSprite(50, 50, 50, 200);
  SasutoUzuha.addImage(SasutoUzuhaImg);
  SasutoUzuha.scale = 0.05;
  Gaara = createSprite(1425, 10, 50, 200);
  Gaara.addImage(GaaraImg);
  Gaara.scale = 0.2;
  Yugito = createSprite(200, 165, 50, 200);
  Yugito.scale = 0.07;
  Yugito.addImage(YugitoImg);
  Yagura = createSprite(700, 165, 50, 200);
  Yagura.addImage(YaguraImg);
  Yagura.scale = 0.2;
  Roshi = createSprite(1700, 250, 50, 200);
  Roshi.addImage(RoshiImg);
  Roshi.scale = 0.1;
  Han = createSprite(770, 350, 50, 200);
  Han.addImage(HanImg);
  Han.scale = 0.1;
  Utakata = createSprite(800, 600, 50, 200);
  Utakata.addImage(UtakataImg);
  Utakata.scale = 0.03;
  Fuu = createSprite(100, 500, 50, 200);
  Fuu.addImage(FuuImg);
  Fuu.scale = 0.1 ;
  KillerBee = createSprite(1200, 700, 50, 200);
  KillerBee.addImage(KillerBeeImg);
  KillerBee.scale = 0.3;
  Naruto = createSprite(500, 600, 50, 200);
  Naruto.addImage(NarutoImg);
  Naruto.scale = 0.05;
  Obito = createSprite(1700, 700, 50, 200);
  Obito.addImage(ObitoImg);
  Obito.scale = 0.1;
  wall1 = createSprite(1000, 100, 25, 250);
  wall2 = createSprite(925, 215, 150, 25);
  wall3 = createSprite(850, 165, 25, 130);
  wall4 = createSprite(250, 225, 500, 25);
  wall5 = createSprite(500, 187, 25, 100);
  wall6 = createSprite(1700, 100, 250, 25);
  wall7 = createSprite(1700, 400, 250, 25);
  wall8 = createSprite(1300, 450, 25, 600);
  wall9 = createSprite(1425, 250, 250, 25);
  wall10 = createSprite(1425, 550, 250, 25);
  wall11 = createSprite(1550, 710, 25, 350);
  wall12 = createSprite(500, 835, 25, 130);
  wall13 = createSprite(400, 785, 200, 25);
  wall14 = createSprite(300, 645, 25, 300);
  wall15 = createSprite(950, 500, 130, 25);
  wall16 = createSprite(1000, 700, 25, 420);
  wall17 = createSprite(925, 800, 150, 25);
  wall18 = createSprite(850, 740, 25, 150);
  wall19 = createSprite(770, 680, 150, 25);
  wall20 = createSprite(700, 620, 25, 150);
  wall1.shapeColor = "red";
  wall2.shapeColor = "red";
  wall3.shapeColor = "red";
  wall4.shapeColor = "red";
  wall5.shapeColor = "red";
  wall6.shapeColor = "red";
  wall7.shapeColor = "red";
  wall8.shapeColor = "red";
  wall9.shapeColor = "red";
  wall10.shapeColor = "red";
  wall11.shapeColor = "red";
  wall12.shapeColor = "red";
  wall13.shapeColor = "red";
  wall14.shapeColor = "red";
  wall15.shapeColor = "red";
  wall16.shapeColor = "red";
  wall17.shapeColor = "red";
  wall18.shapeColor = "red";
  wall19.shapeColor = "red";
  wall20.shapeColor = "red";
  edges = createEdgeSprites();
  wallsGroup = new Group ();
  JinchurikiGroup = new Group ();
  chakraGrp = new Group ();
  chakra = createSprite(100, 800, 100, 100);
  chakra.addImage(chakraImg);
  chakraGrp.add(chakra);
  chakra.scale = 0.08;
  Gaara.velocityX = 3;
  Yugito.velocityX = 3;
  Yagura.velocityY = 3;
  Roshi.velocityY = 3;
  Han.velocityX = 3;
  Utakata.velocityX = 3;
  Fuu.velocityY = 3;
  KillerBee.velocityY = 3;
  Naruto.velocityY = 3;
  Obito.velocityY = 3;
  backgroundSound.play();
  backgroundSound.loop();
  blank = createSprite(900, 450, 1800, 900);
  logo = createSprite(900, 50, 50, 50);
  logo.addImage(logoImg);
  NPC = createSprite(500, 450, 50, 50);
  NPC.scale = 0.75
  PC = createSprite(1400, 450, 50, 50);
  PC.addImage(PCImg);
  NPC.addImage(NPCImg);
  JinchurikiAttack = createSprite(900, 450, 50, 50);
  JinchurikiAttack.addImage(JinchurikiAttackImg);
  JinchurikiAttack.scale = 0.5;
  SasutoUzuhaAttack = createSprite(900, 450, 50, 50);
  SasutoUzuhaAttack.addImage(SasutoUzuhaAttackImg);
}
function preload() {
  SasutoUzuhaImg = loadImage("visuals/CursedBoy.png");
  GaaraImg = loadImage("visuals/Gaara.png");
  YugitoImg = loadImage("visuals/Yugito.png");
  YaguraImg = loadImage("visuals/Yagura.png");
  RoshiImg = loadImage("visuals/Roshi.png");
  HanImg = loadImage("visuals/Han.png");
  UtakataImg = loadImage("visuals/Utakata.png");
  FuuImg = loadImage("visuals/Fuu.png");
  KillerBeeImg = loadImage("visuals/KillerBee.png");
  NarutoImg = loadImage("visuals/Naruto.png");
  ObitoImg = loadImage("visuals/Obito.png");
  chakraImg = loadImage("visuals/Chakra.png");
  backgroundSound = loadSound("visuals/AJKuranoSadnessAndSorrowTrap.mp3");
  logoImg = loadImage("visuals/Logo.png");
  PCImg = loadImage("visuals/PC Win.png")
  NPCImg = loadImage("visuals/NPC Win.png")
  JinchurikiAttackImg = loadImage("visuals/NPC Attack.png");
  SasutoUzuhaAttackImg = loadImage("visuals/PC attack.png");
  WinSound = loadSound("visuals/AJKuranoSpheroIntro.mp3")
  LoseSound = loadSound("visuals/AJKuranoTrapIntro.mp3")
}
function draw() {
  background("cyan");  

  fill("red");
  textStyle(BOLD);
  text("You were a young boy name Sasuto Uzuha without anyone with to care about you. Everyone treated you like you were nothing but you turned out to be a part of the most important clan", 10, 250);
  text("with amazing powers and now you want to rebuild the whole world with no darkness and in the process, you have to collect a special type of energy and execute anyone who stands in", 10, 270);
  text("your way. Move using the arrow keys, don't touch the other characters. Collect 5 Chakra to win. Click the space bar to stop moving. If you touch the enemy, then half your energy will go to them.", 10, 290);

  PC.visible = false;
  NPC.visible = false;
  SasutoUzuhaAttack.visible = false;
  JinchurikiAttack.visible = false;
  blank.visible = false;

  wallsGroup.add(wall1);
  wallsGroup.add(wall2);
  wallsGroup.add(wall3);
  wallsGroup.add(wall4);
  wallsGroup.add(wall5);
  wallsGroup.add(wall6);
  wallsGroup.add(wall7);
  wallsGroup.add(wall8);
  wallsGroup.add(wall9);
  wallsGroup.add(wall10);
  wallsGroup.add(wall11);
  wallsGroup.add(wall12);
  wallsGroup.add(wall13);
  wallsGroup.add(wall14);
  wallsGroup.add(wall15);
  wallsGroup.add(wall16);
  wallsGroup.add(wall17);
  wallsGroup.add(wall18);
  wallsGroup.add(wall19);
  wallsGroup.add(wall20);

  JinchurikiGroup.add(Gaara);
  JinchurikiGroup.add(Yugito);
  JinchurikiGroup.add(Yagura);
  JinchurikiGroup.add(Roshi);
  JinchurikiGroup.add(Han);
  JinchurikiGroup.add(Utakata);
  JinchurikiGroup.add(Fuu);
  JinchurikiGroup.add(KillerBee);
  JinchurikiGroup.add(Naruto);
  JinchurikiGroup.add(Obito);

  SasutoUzuha.bounceOff(edges);
  SasutoUzuha.bounceOff(wallsGroup);
  
  JinchurikiGroup.bounceOff(wallsGroup);
  JinchurikiGroup.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    SasutoUzuha.velocityY = -5
    SasutoUzuha.velocityX = 0
  }
  if(keyDown("DOWN_ARROW")){
    SasutoUzuha.velocityY = 5
    SasutoUzuha.velocityX = 0
  }
  if(keyDown("LEFT_ARROW")){
    SasutoUzuha.velocityX = -5
    SasutoUzuha.velocityY = 0
  }
  if(keyDown("RIGHT_ARROW")){
    SasutoUzuha.velocityX = 5
    SasutoUzuha.velocityY = 0
  }
  if(keyDown("space")){
    SasutoUzuha.velocityX = 0
    SasutoUzuha.velocityY = 0
  }

  if(SasutoUzuha.isTouching(chakraGrp)){
    chakraGrp.destroyEach();
    spawnChakra();
    playerScore += 1;
  }

  if(SasutoUzuha.isTouching(JinchurikiGroup) && playerScore > 0){
    enemyScore+=1
    playerScore-=1
    playerScore.x = 100;
    playerScore.y = 110;
    JinchurikiGroup.bounce(SasutoUzuha);
  }

text("Sasuto Uzuha Score = " + playerScore, 100, 10);
text("Jinchuriki Score = " + enemyScore, 1600, 10);

if(playerScore > 4){
  SasutoUzuha.x = 2000;
  PC.visible = true;
  NPC.visible = true;
  SasutoUzuhaAttack.visible = true
  backgroundSound.stop();
  blank.visible = true;
  SasutoUzuhaAttack.velocityX = -5
  NPC.velocityX = -5
  chakra.visible = false;
}

if(enemyScore > 9){
  SasutoUzuha.x = 2000;
  PC.visible = true;
  NPC.visible = true;
  JinchurikiAttack.visible = true;
  backgroundSound.stop();
  blank.visible = true
  JinchurikiAttack.velocityX = 5
  PC.velocityX = 5
  chakra.visible = false;
}

if(NPC.x === 500 && NPC.visible === true && SasutoUzuhaAttack.visible === true){
  WinSound.play();
}

if(PC.x === 500 && PC.visible === true && JinchurikiAttack.visible === true){
  LoseSound.play();
}

drawSprites();
}
function spawnChakra(){
chakra = createSprite(100, 800, 100, 100);
chakra.addImage(chakraImg);
chakraGrp.add(chakra);
chakra.scale = 0.08;
chakra.x = random(50,1750);
chakra.y = random(50, 850);
}
