var player;

function setup(){
  createCanvas(1000, 425);
  player = new Player();
}

function draw(){ 
  background(0,200,0);
  checkMoving();
  player.show();
}

function checkMoving(){
  if(keyIsDown(83)){
    player.goDown();
  }
  if(keyIsDown(87)){
    player.goUp();
  }
  if(keyIsDown(65)){
    player.goLeft();
  }
  if(keyIsDown(68)){
    player.goRight();
  }
}