function Player(){
  this.x = 60;
  this.y = 60;
  var speedX = 0;
  var speedY = 0;

  //scoreboard
  function updateScoreTallyUI(){
    scoreParagraph.innerText = 'Player 1: ' + game.score.user1 + ' v Player 2: ' + game.score.user2;
  }

  //draws the square player
  this.show = function(){
    fill(255, 0, 0);
    rect(this.x, this.y, 40, 40);
  }

  //function for key-presses
  this.goDown = function(){
    if (speedY < 5 & speedY > 0){
      this.y += speedY;
      ball.y += speedY;
    } else {
      speedY = 5;
      this.y += speedY;
    }
  }
  
  
  this.goUp = function(){
    if (speedY > -5 & speedY < 0){
      speedY -= 1;
      this.y += speedY;
    } else {
      speedY = -5;
      this.y += speedY;
    }
  }
  
  
  this.goLeft = function(){
    if (speedX > -5 & speedX < 0){
      speedX -= 1;
      this.x += speedX;
    } else {
      speedX = -5;
      this.x += speedX;
    }
  }
  
  
  this.goRight = function(){
    if (speedX < 5 & speedX > 0){
      speedX += 1;
      this.x += speedX;
    } else {
      speedX = 5;
      this.x += speedX;
    }
  }
  
  
  this.drift = function(){
    if (speedY > 0) {
      speedY -= .5;
      this.y += speedY;
    }
    if (speedY < 0){
      speedY += .5;
      this.y += speedY;
    }

    if (speedX > 0) {
      speedX -= .5;
      this.x += speedX;
    }
    if (speedX < 0){
      speedX += .5;
      this.x += speedX;
    }
  }
}