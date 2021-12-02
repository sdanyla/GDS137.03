//Define Booleans for each key
var a = false;
var d = false;
var w = true;
var s = true;
var o = true;
var l = true;
var j = false;
var k = false;

//Add Event Listeners
document.addEventListener("keyup", press);
document.addEventListener("keydown", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = true;
	}
	if(e.keyCode == 68)
	{
		d = true;
	}
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 79)
	{
		o = true;
	}
	if(e.keyCode == 76)
	{
		l = true;
	}
	if(e.keyCode == 74)
	{
		 j= true;
	}
	if(e.keyCode == 75)
	{
		 k= true;
	}


}


function release(e)
{
	//---This logs key codes into the browser's console.
    console.log("Released" + e.keyCode);
	
	if(e.keyCode == 65)
	{
		a = false;
	}
	if(e.keyCode == 68)
	{
		d = false;
	}
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 79)
	{
		o = false;
	}
	if(e.keyCode == 76)
	{
		l = false;
	}
	if(e.keyCode == 74)
	{
		 j= false;
	}
	if(e.keyCode == 75)
	{
		k = false;
	}
}
