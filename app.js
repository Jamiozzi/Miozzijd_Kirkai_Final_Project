var scoreParagraph = document.getElementById("score");
var gameScore = 0;
var userName = "Challenger";

var player;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;

var ball1Touched = 0;
var ball2Touched = 0;
var ball3Touched = 0;
var ball4Touched = 0;
var ball5Touched = 0;
var ball6Touched = 0;
var ball7Touched = 0;
//scoreboard
function updateScore() {
  gameScore++;
  print(gameScore);
  scoreParagraph = "Challenger Score: " + gameScore.toString();
}

function setup() {
  createCanvas(1000, 425);
  player = new Player();
  ball1 = new Ball1();
  ball2 = new Ball2();
  ball3 = new Ball3();
  ball4 = new Ball4();
  ball5 = new Ball5();
  ball6 = new Ball6();
  ball7 = new Ball7();
}

function draw() {
  background(0, 200, 0);
  checkMoving();
  player.show();
  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();
  ball6.show();
  ball7.show();
  fill(255, 255, 255);
  textSize(24);
  text(`${(millis()/1000).toFixed(2)} seconds have gone by!`, width/2.8, height/10);

  hit1 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball1.getBallX(),
    ball1.getBallY(),
    ball1.getBallR()
  );
  if (hit1) {
    updateScore();
    ball1Check();
  }
  hit2 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball2.getBallX(),
    ball2.getBallY(),
    ball2.getBallR()
  );
  if (hit2) {
    updateScore();
    ball2Check();
  }
  
  hit3 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball3.getBallX(),
    ball3.getBallY(),
    ball3.getBallR()
  );
  if (hit3) {
    updateScore();
    ball3Check();
  }
  
  hit4 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball4.getBallX(),
    ball4.getBallY(),
    ball4.getBallR()
  );
  if (hit4) {
    updateScore();
    ball4Check();
  }
  
  hit5 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball5.getBallX(),
    ball5.getBallY(),
    ball5.getBallR()
  );
  if (hit5) {
    updateScore();
    ball5Check();
  }
  
  hit6 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball6.getBallX(),
    ball6.getBallY(),
    ball6.getBallR()
  );
  if (hit6) {
    updateScore();
    ball6Check();
  }
  
  hit7 = collideRectCircle(
    player.getPlayerX(),
    player.getPlayerY(),
    player.getPlayerW(),
    player.getPlayerH(),
    ball7.getBallX(),
    ball7.getBallY(),
    ball7.getBallR()
  );
  if (hit7) {
    updateScore();
    ball7Check();

  }
}

function ball1Check() {
  ball1Touched++
  if (ball1Touched > 0) {
    ball1.remove();
  }
  else{
    false;
  }
}
function ball2Check() {
  ball2Touched++
  if ((ball1Touched > 0) && (ball2Touched > 0)) {
    ball2.remove();
  }
}
function ball3Check() {
  ball3Touched++
  if ((ball1Touched > 0) && (ball2Touched > 0) && (ball3Touched > 0)) {
    ball3.remove();
  }
}
function ball4Check() {
  ball4Touched++
  if ((ball1Touched > 0) && (ball2Touched > 0) && (ball3Touched > 0) && (ball4Touched > 0)) {
    ball4.remove();
  }
}
function ball5Check() {
  ball5Touched++
  if ((ball1Touched > 0) && (ball2Touched > 0) && (ball3Touched > 0) && (ball4Touched > 0) && (ball5Touched > 0)) {
    ball5.remove();
  }
}
function ball6Check() {
  ball6Touched++
  if ((ball1Touched > 0) && (ball2Touched > 0) && (ball3Touched > 0) && (ball4Touched > 0) && (ball5Touched > 0) && (ball6Touched > 0)) {
    ball6.remove();
  }
}
function ball7Check() {
  ball7Touched++
  if ((ball1Touched > 0) && (ball2Touched > 0) && (ball3Touched > 0) && (ball4Touched > 0) && (ball5Touched > 0) && (ball6Touched > 0) &&(ball7Touched > 0)) {
    ball7.remove();
    millis.stop();
  }
}

function checkMoving() {
  //s key
  if (keyIsDown(83)) {
    player.goDown();
  }
  // w key
  if (keyIsDown(87)) {
    player.goUp();
  }
  // a key
  if (keyIsDown(65)) {
    player.goLeft();
  }
  // d key
  if (keyIsDown(68)) {
    player.goRight();
  } else {
    player.drift();
  }
}

function collide() {
  ball.changeBallColor();
}
