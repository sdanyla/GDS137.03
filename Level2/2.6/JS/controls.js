//Define Booleans for each key
var s = true;
var w = true;


//Add Event Listeners
document.addEventListener("keydown", press);
document.addEventListener("keyup", release);

//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 83)
	{
		s = true;
	}
	if(e.keyCode == 87)
	{
		w = true;
	}
	if(e.keycode == 65)
	{
		a = false;
	}
	if(e.keycode == 68)
	{
		d = false;
	}
}


function release(e)
{
	//---This logs key codes into the browser's console.
	//console.log("Released" + e.keyCode);
	
	if(e.keyCode == 83)
	{
		s = false;
	}
	if(e.keyCode == 87)
	{
		w = false;
	}
	if(e.keycode == 65)
	{
		a = false;
	}
	if(e.keycode == 68)
	{
		d = false;
	}
}


