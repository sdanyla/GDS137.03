//Declare my variables

var canvas;
var context;
var timer;
var force;
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var paddle;

//This is used to stop the ball from moving through obstacles.
var prevY

	//Set Up the Canvas
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	//Instantiate the Player
	player = new GameObject();
	player.y = 380;
	player.x = 15;
	player.vy = 10;
	player.height = 110;
	player.width = 15;
	player.color = "black";
	
	
	//Instantiate the ball
	ball = new GameObject();
	ball.y = 380;
	ball.x = canvas.width/2;
	ball.vx = -4;
	ball.vy = 0;
	ball.height = 30;
	ball.width = 30;
	ball.color = "blue";

	
	//Instantiate the 2nd paddle
	paddle = new GameObject();
	paddle.y = 380;
	paddle.x = 1020;
	paddle.vy = 15;
	paddle.height = 110;
	paddle.width = 15;
	paddle.color = "dark green"

	//Set the Animation Timer();
	timer = setInterval(animate, interval);

	function animate()
	{
		//Erase the Screen
		context.clearRect(0,0,canvas.width, canvas.height);	
	
	
		//Move the Player Up and Down
		if(w)
			{
			console.log("Moving Up");
			player.y += 5;
		}
			if(s)
		{
			console.log("Moving Down");
			player.y += -5;
		}
		
		//Move the Paddle Up and Down
		if(o)
			{
			console.log("Moving Up");
			player.y += 5;
		}
			if(l)
		{
			console.log("Moving Down");
			player.y += -5;
		}

		//Update the Screen
	
		//move the ball
		ball.x += ball.vx;
		ball.y += ball.vy;
	
		//Check Collision
		if (ball.hitTestObject(player))
		{
			ball.vx =4;
			//ball.vy =0;
			ball.x = player.x + player.width/2 + ball.width/2
			//ball.y = player.y - player.height/2 - ball.height/2

			if (ball.y > player.y/2)
			{
				//ball.vy =0;
				ball.vx =3;
			}
		}	
		
		if(ball.x > canvas.width - ball.width/2)
		{
			ball.vx = -4;
			ball.x = canvas.width - ball.width/2
		}

		if (ball.y > canvas.height + ball.height/2)
    	{
        	ball.y = canvas.height - ball.height/2
        	ball.vy = -ball.height/2
    	}
		if (ball.y < 40)
		{
		ball.vy = -ball.vy
		}
		
		//Check Collision
		if (ball.hitTestObject(paddle))
		{
			ball.vx =4;
			//ball.vy =0;
			ball.x = paddle.x + paddle.width/2 + paddle.width/2
			//ball.y = player.y - player.height/2 - ball.height/2

			if (ball.y > paddle.y)
			{
				//ball.vy =0;
				ball.vx =3;
			}
		}	

		if(ball.x > canvas.width - ball.width/2)
		{
			ball.vx = -4;
			ball.x = canvas.width - ball.width/2
		}

		//Update the Screen
		player.drawRect();
		paddle.drawRect();
		ball.drawCircle();	
	}


