// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	player = new Player();
	
	//------Declare the Player's speed on the x and y axis------
	player.vx = -2;
	player.vy = -2;
	//----------------------------------------------------
	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//----Movement Using the Player's move() function----
	player.move();
	//---------------------------------------------------
	
	//--------------Bounce of Sides----------------------
	if(player.x > canvas.width + player.width/2)
	{
		player.vx = -player.width/2	
	}

	if (player.x < 120)
	{
		player.vx = -player.vx
	}

    if (player.y < 100)
    {
        player.vy = -player.vy
    }

    if (player.y > canvas.height + player.height/2)
    {
        player.vy = -player.height/2
    }

	//---------------------------------------------------

	player.draw();
}

//function animate()
//{
	//--------------Bounce of Left----------------------
	//if(player.x < canvas.width - player.width/2)
	//{
		//-player.vx == player.vx;	
	//}
	//---------------------------------------------------

	//player.draw();
//}