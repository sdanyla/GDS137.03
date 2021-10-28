// JavaScript Document

var canvas;
var context;
var timer;
var interval = 60/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	

	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = -5;
	player.vy = -15;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


	function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
}
