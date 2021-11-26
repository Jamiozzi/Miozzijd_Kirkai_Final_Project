var player;
var ball;

function setup(){
  createCanvas(1000, 425);
  player = new Player();
  ball = new Ball();
}

function draw(){ 
  background(0,200,0);
  checkMoving();
  player.show();
  ball.show();
  hit = collideRectCircle(player.getPlayerX(), player.getPlayerY(), player.getPlayerW(), player.getPlayerH(), ball.getBallX(), ball.getBallY(), ball.getBallR());
  if (hit){
    collide();
  }
  print(hit);
}

function checkMoving(){
  //s key
  if(keyIsDown(83)){
    player.goDown();
  }
  // w key
  if(keyIsDown(87)){
    player.goUp();
  }
  // a key
  if(keyIsDown(65)){
    player.goLeft();
  }
  // d key
  if(keyIsDown(68)){
    player.goRight();
  }
  else {
    player.drift();
  }
}

function collide(){
    ball.setBallSpeedX(player.getPlayerSpeedX());
    ball.setBallSpeedY(player.getPlayerSpeedY());
  }


