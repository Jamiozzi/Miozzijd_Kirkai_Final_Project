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
  else{
    player.drift();
  }
}