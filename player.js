function Player(){
  this.x = 60;
  this.y = 60;
  var speed = 0;
  
  this.show = function(){
    fill(255, 0, 0);
    rect(this.x, this.y, 40, 40);

  }
  this.goDown = function(){
    speed = 1;
    this.y += speed;
  }
  this.goUp = function(){
    speed = 1;
    this.y -= speed;
  }
  this.goLeft = function(){
    speed = 1;
    this.x -= speed;
  }
  this.goRight = function(){
    speed = 1;
    this.x += speed;
  }

}