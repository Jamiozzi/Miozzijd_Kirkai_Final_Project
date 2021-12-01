function Ball6(){
  this.cx = random(10,990);
  this.cy = random(10,415);
  this.cr = 40;
  var speedX = 0;
  var speedY = 0;
  var touched = true;
  //draws the square player
  this.show = function(){
    if (touched)
    fill(color('purple'));
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
  this.changeBallColor = function(){
    this.fill(0,255,0);
  }

}