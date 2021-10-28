//Declare my variables

var canvas;
var context;
var timer;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new Player();
	ctx.beginPath();
	ctx.arc(100, 75, 50, 0, 2 * Math.PI);
	ctx.stroke();

	//Set the Animation Timer
	timer = setInterval(animate, interval);

	function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.x += 2;
	
	//Update the Screen
	
	
	player.draw();
}
