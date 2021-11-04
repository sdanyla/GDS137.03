// JavaScript Document

var canvas;
var ctx;
var timer;
var interval = 60/60;
var player;

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");	

	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = -5;
	player.vy = -5;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


	function animate()
{
	ctx.clearRect(0,0,canvas.width, canvas.height);	
}
