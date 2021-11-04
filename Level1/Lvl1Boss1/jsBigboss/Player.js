// JavaScript Document
function Player()
{
	//player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//player's dimensions
	this.width = 75;
	this.height = 75;
	
	//player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//player's color
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	  
	  setInterval(function() {
		  var element = document.getElementById("box");
		  //generate random red, green and blue intensity
		  var r = getRandomInt(0, 255);
		  var g = getRandomInt(0, 255);
		  var b = getRandomInt(0, 255);
		  
		  document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
	  }, 1500);
	
	
	
	
	this.color = RandomColor();
	
	//This draws the player to the screen
	this.draw = function()
	{
		ctx.save();
			ctx.fillStyle = this.color;
			ctx.translate(this.x, this.y);
			ctx.fillRect((-this.width/2), (-this.height/2), +this.width, this.height);
		ctx.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
