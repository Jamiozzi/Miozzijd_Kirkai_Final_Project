function Ball(){
  this.cx = 200;
  this.cy = 200;
  this.cr = 40;
  var speedX = 0;
  var speedY = 0;

  //draws the square player
  this.show = function(){
    fill(255, 0, 0);
    circle(this.cx, this.cy, this.cr);
  }

  this.getBallX = function(){
    return this.cx;
  }
  this.getBallY = function(){
    return this.cy;
  }
  this.getBallR = function(){
    return this.cr;
  }
  this.getBallSpeedX = function(){
    return this.speedX;
  }
  this.getBallSpeedY = function(){
    return this.speedY;
  }
  this.setBallSpeedX = function(SpeedX){
    SpeedX = this.speedX;
  }
  this.setBallSpeedY = function(SpeedY){
    SpeedY = this.speedY;
  }

}