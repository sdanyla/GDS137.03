// JavaScript Document

var canvas;
var context;
var timer;
var interval = 1000/60;
var player;
var player2;
var ball;

//Instantiate the Player
player = new GameObject();
player.y = 380;
player.x = 25;
player.vy = 15;
player.height = 102;
player.width = 17;


//Instantiate the ball
ball = new GameObject();
ball.y = 380;
ball.x = canvas.width/2;
ball.vx = -4;
ball.vy = 0;
ball.height = 22;
ball.width = 22;

//---------------Set Friction and Gravity-----------------
var frictionX = .85;	
var frictionY = .97;
var gravity = 1;
//--------------------------------------------------------

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");	
	
	player = new GameObject();
	player.force = 2;

	player2 = new GameObject();
	player2.force = 2;

	ball = new GameObject();

	
	timer = setInterval(animate, interval);


function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Call just one of the functions below to view acceleration, friction, gravity and pixel lock.
	//showAcceleration();
	//showFriction();
	//showGravity();
	//showPixelLock();
	//showBounce();
	
	player.drawRect();
	player2.drawRect();
	ball.drawCircle();


}


/*IMPORTANT: Below are four functions that demonstrate the various elements we will use to simulating Game Physics.
each function is a copy of the previous with more functionality added. 
ONLY CALL ONE OF THESE FUNCTIONS AT A TIME!!!!!!!!*/



function showAcceleration()
{
	//--------------Use Velocity and Acceleration to move around----------------------
	if(d)
	{	
		player.vx +=  player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
	player.y += player.vy;

	player2.x += player.vx;
	player2.y += player.vy;

}

function showFriction()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply friction to the Velocity X-----------------------------------------
	player.vx *= frictionX;
	//---------------------------------------------------------------------------------------
	player.x += player.vx;
}

function showGravity()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	//--------------Apply Gravity to the Velocity Y-----------------------------------------
	player.vy += gravity;
	player.y += player.vy;
	//---------------------------------------------------------------------------------------
	
	player.vx *= frictionX;
	player.x += player.vx;
}

function showPixelLock()
{
	
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	if(k)
	{	
		player2.vx += player2.ax * playe2r.force;
	}
	if(j)
	{
		player2.vx += player2.ax * -player2.force;
	}
	if(o)
	{	
		player2.vy += player2.ay * -player2.force;
	}
	if(l)
	{
		player2.vy += player2.ay * player2.force;
	}

	player.vx *= frictionX;	
	player.vy *= frictionY;
	
	//------Round the velocity before applying it to the position.--------------------------
    //------This will keep the object from moving fractions of a pixel----------------------
	//------This might not be noticeable now, but will help alot when things get complex----
	player.y += Math.round(player.vy);
	player.x += Math.round(player.vx);
	//--------------------------------------------------------------------------------------
}

function showBounce()
{
	if(d)
	{	
		player.vx += player.ax * player.force;
	}
	if(a)
	{
		player.vx += player.ax * -player.force;
	}
	if(w)
	{	
		player.vy += player.ay * -player.force;
	}
	if(s)
	{
		player.vy += player.ay * player.force;
	}
	
	player.vy *= frictionY;
	player.vx *= frictionX;
	
	player.vy += gravity;
	
	player.x += player.vx;
	player.y += player.vy;
	
	//--------------------Check Collision------------------------------------------------------
	if(player.y > canvas.height - player.height/2)
	{
		//--------Bounce the Ball---------------------------------------------------------------
		ball.y = canvas.height -ball.height/2;
		//the decimal is how bouncy you want the object to be
		//It should be a number between 0 and 2;
		player.vy = -player.vy * .99;
	}
	//-----------------------------------------------------------------------------------------
}


