const scoreParagraph = document.getElementById('score');
var gameScore = 0;
var userName = 'Challenger'

var player;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;

//scoreboard 
function updateScore(){   gameScore++;  
   print(gameScore);  
  //scoreParagraph = 'Challenger Score: ' + gameScore;  
  print(gameScore);
  updateScore();
}



function setup(){
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

function draw(){ 
  background(0,200,0);
  checkMoving();
  player.show();
  ball1.show();
  ball2.show();
  ball3.show();
  ball4.show();
  ball5.show();
  ball6.show();
  ball7.show();

  hit = collideRectCircle(player.getPlayerX(), player.getPlayerY(), player.getPlayerW(), player.getPlayerH(), ball1.getBallX(), ball1.getBallY(), ball1.getBallR());
  if (hit){
    updateScore();
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
    ball.changeBallColor();
  }


