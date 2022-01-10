
let lander;
var lander_img;
var bg_img;

const initial = 0;
var gameState = initial;
const play = 1;
const end = 2;
var vx = 0;
var g = 0.05;
var vy = 0;
var obstaclesgrp, discoveriesgrp, gasStationsgrp;
var spaceship;
var ground;

function preload() {
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000, 700);

  rectMode(CENTER);
  textSize(15);
  
  ground=createSprite(500,580,1000,10);
  spaceship = createSprite(50, 550, 20, 20)
  obstaclesgrp = new Group();
  discoveriesgrp = new Group();
  gasStationsgrp = new Group();

}

function draw() {
  if (gameState === initial) {
    background(51);
    image(bg_img, 0, 0);

    textSize(45);
    fill("white");
    stroke("black");
    text("THE COSMO KINGS", 250, 100);
    textSize(30);
    text("Hello there!Welcome to the Epic THE COSMO KINGS game", 120, 150);
    textSize(20);
    fill("yellow");
    text("~>The Rules of the game are as follows: ", 40, 200);
    text("~>The goal of the game is to escape from the aliens,meteors and other obstacles.", 40, 250);
    text("~>You will have to travel to the destination(particular planet given).", 40, 300);
    text("~>You have to discover new things which are hidden in your destination planet.", 40, 350);
    text("~>You should have enough fuel by filling the fuel tank at gas stations at regular intervals.", 40, 400);
    text("~>Make sure you safely return back to Earth once the number of hidden things become 0.", 40, 450);
    text("~>You may press the arrow keys to move the spaceship before reaching the destination planet.", 40, 500);
    text("scientists once you reach the destination planet.", 40, 525);
    textSize(30);
    text("~>For now,You may press the UP ARROW KEY to start the game.", 40, 605);

    if (keyDown(UP_ARROW)) {
      gameState = 1
    }
  }
  else if (gameState === 1) {
    gamePlay();
    drawSprites();
  }



}

function gamePlay() {
  background("white");
  text("x: " + mouseX + " Y : " + mouseY, mouseX, mouseY);
  
  if(keyDown(UP_ARROW)){
    spaceship.velocityY=-7;
  }
  if(keyDown(DOWN_ARROW)){
    spaceship.velocityY=+5;
  }
  if(keyDown(LEFT_ARROW)){
    spaceship.x=spaceship.x-5;
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x=spaceship.x+5;
  }

  if(keyCode===13){
    spaceship.velocityY=-4;

  }
  spaceship.velocityY+=0.2;

  spaceship.collide(ground);

  spawnObstacles();
  //spawnGasstations();
  //spawnDiscoveries();
  drawSprites();

}

function spawnObstacles() {

  if (frameCount % 100 === 0) {
    obstacle = createSprite(Math.round(random(100, 500)), Math.round(random(100, 600)), 10, 10);
    obstacle.velocityX = random(-4, 4);
    obstacle.velocityY = random(-4, 4);
    var rand = Math.round(random(1, 4));
    switch (rand) {
      case 1: obstacle.shapeColor = "green";
        break;

      case 2: obstacle.shapeColor = "red";
        break;

      case 3: obstacle.shapeColor = "yellow";
        break;

      case 4: obstacle.shapeColor = "blue";
        break;

      default: obstacle.shapeColor = "blue";
        break;

    }

  }


}