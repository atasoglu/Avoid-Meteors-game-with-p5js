var kenar = 25;
var box = [];
var block;
var length = 20;
var score = 0;

function setup() {
  createCanvas(500, 500);
  for (var i=0;i<length;i++) {
  	box[i] = new Box();
  }
  // box = new Box();
  block = new Block();
  textSize(22);
  textFont("Tahoma");
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
      if (block.x != 0) block.move(-kenar);
  }
  else if (keyCode === RIGHT_ARROW) {
  		if (block.x != width-block.blockLength) block.move(kenar);
  }
}

function gameOver() {
	for (var i=0;i<length;i++) {
  	if (box[i].y+kenar == block.y) {
    	for (var j=1;j<(block.blockLength/kenar);j++) {
      	if (box[i].x == block.x+j*kenar || box[i].x+kenar == block.x+j*kenar) {
        	noLoop();
          fill(255,0,0);
          text("Game Over",width/2-60,100);
          break;
        }
      }
    }
  }

}

function draw() {
  background(220);
  for (var i=0;i<length;i++) {
  	box[i].fall();
  	box[i].show();
  }
  block.show();
  gameOver();
  fill(255,255,0);
  text("Score: " + score,30,50);
}


function Box() {
	this.x = floor(random(0,kenar)) * kenar;
  this.y = floor(random(-kenar,0)) * kenar;
  this.ySpeed = 2.5;
  this.fall = function() {
    this.y += this.ySpeed;
    if (this.y > height) {
      this.x = floor(random(0,kenar)) * kenar;
  		this.y = floor(random(-kenar,0)) * kenar;
      score++;
    }
  }
  this.show = function() {
    fill(255,0,0);
  	rect(this.x,this.y,kenar,kenar);
  }
}

function Block() {
	this.blockLength = kenar * 4;
  this.x = (width-this.blockLength)/2;
  this.y = height-kenar;
  // this.xSpeed = 3.5;
  this.move = function(xSpeed) {
  	this.x += xSpeed;
  }
  this.show = function() {
    fill(0,255,0);
    rect(this.x,this.y,this.blockLength,kenar);
  }
}
