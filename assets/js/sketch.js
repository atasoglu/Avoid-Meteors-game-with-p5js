var scl = 25;
var box = [];
var block;
var lenght = 20;
var score = 0;

function setup() {
  createCanvas(500, 500);
  for (var i=0;i<lenght;i++) {
  	box[i] = new Box();
  }
  block = new Block();
  textSize(22);
  textFont("Tahoma");
  }

function keyPressed() {
	if (keyCode===RIGHT_ARROW) {
    	if (block.xCrd != width-block.blockLength) block.move(scl);
	}
  else if (keyCode===LEFT_ARROW) {
    	if (block.xCrd != 0) block.move(-scl);
  }
}

function gameOver() {
	for (var i=0;i<lenght;i++) {
  	if ((box[i].yCrd+scl) == block.yCrd) {
    	for (var j=1;j<(block.blockLength/scl);j++) {
        if (box[i].xCrd == block.xCrd+j*scl || (box[i].xCrd+scl) == block.xCrd+j*scl) {
        	noLoop();
          dead = true;
          fill(244,66,215);
          text("Game Over!",width/2-60,100);
          break;
        }
    	}
  	}
  }
}

function draw() {
  background(220);
  for (var i=0;i<lenght;i++) {
  	box[i].fall();
    box[i].show();
  }
  // block.move();
  block.show();
  gameOver();
  fill(0,0,255);
  text('Score: '+score,20,30);
}

function Box() {
	this.xCrd= floor(random(scl)) * scl;
	this.yCrd= floor(random(-scl,0)) * scl;
	this.ySpeed=2.5;
	this.fall = function() {
		this.yCrd += this.ySpeed;
    if (this.yCrd > height) {
      this.yCrd = floor(random(-scl,0)) * scl;
      score++;
    }
	}
	this.show = function() {
		fill(255,0,0);
		rect(this.xCrd,this.yCrd,scl,scl);
	}
}

function Block() {
  this.blockLength=scl*4;
	this.xCrd=(width/2)-this.blockLength/2;
  this.yCrd=height-scl;
  this.move = function(xSpeed) {
  	this.xCrd += xSpeed;
  }
  this.show = function() {
  	fill(0,255,0);
    rect(this.xCrd,this.yCrd,this.blockLength,scl);
  }
}
