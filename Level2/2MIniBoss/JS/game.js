//Declare my variables

var canvas;
var context;
var timer;
var force;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;

//This is used to stop the player from moving through obstacles.
var prevY

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.y = 380;
	player.x = 25;
	player.vy = 5;
	player.height = 102;
	player.width = 17;
	
	
	//Instantiate the ball
	ball = new GameObject();
	ball.y = 380;
	ball.x = canvas.width/2;
	ball.vx = -4;
	ball.vy = 0;
	ball.height = 20;
	ball.width = 20;


	

	//Set the Animation Timer();
	timer = setInterval(animate, interval);

function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	
	//Move the Player to the right
	if(s)
	{
		console.log("Moving Up");
		player.y += 2;
	}
	if(w)
	{
		console.log("Moving Down");
		player.y += -2;
	}
	
	//Update the Screen
	
	//move the ball
	ball.x += ball.vx;
	ball.   y += ball.vy;
	
	//Check Collision


	if (ball.hitTestObject(player))
	{
		ball.vx = 4;
		ball.x = player.x + player.width/2 + ball.width/2

		if (ball.y < player.y)
		{
			ball.vy =-5;

		}
	}

	if(ball.x > canvas.width - ball.width/2)
	{
		ball.vx = -4;
		ball.x = canvas.width - ball.width/2
	}

	

	//Update the Screen
	player.drawRect();
	ball.drawCircle();
	
}