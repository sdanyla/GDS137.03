//Declare my variables

var canvas;
var context;
var timer;
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
	player.x = -35;
	
	//Instantiate the ball
	ball = new GameObject();
	ball.y = 380;
	ball.x = 65;


	

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
	player.drawRect();
	ball.drawCircle();
	
	//move the ball
	ball.x += ball.vx;
	
	//Check Collisions
	
	if(ball.x > canvas.width)
	{
		ball.vx = -ball.x
	}

	if (ball.x >= player.width)
	{
		ball.x += ball.vx
		
	}

	if(ball.x)
	//Update the Screen
	player.drawRect();
	ball.drawCircle();
	
}

    