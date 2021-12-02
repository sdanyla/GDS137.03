//Define Booleans for each key

var w = true;
var s = true;




//Add Event Listeners
document.addEventListener("keyup", release);
document.addEventListener("keydown", press);
//Event Functions
function press(e)
{
	//---This logs key codes into the browser's console.
	console.log("Pressed" + e.keyCode);
	
	if(e.keyCode == 83)
	{
		w = true;
	}
	if(e.keyCode == 87)
	{
		s = true;
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
	console.log("Released" + e.keyCode);
	
	if(e.keyCode == 83)
	{
		w = false;
	}
	if(e.keyCode == 87)
	{
		s = false;
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

