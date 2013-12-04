//can take part in 5 activities per day
//after 5 activities, the next day starts


function time()
{
	var time=0;
	
	if(time < 5)
	{
		document.getElementById("timeDiv").innnerHTML =
		"It is Day 1";
		
	}
	else if(time < 10)
	{
		document.getElementById("timeDiv").innerHTML =
		"It is Day 2";
	}
	
	else if(time < 15)
	{
		document.getElementById("timeDiv").innerHTML =
		"It is Day 3";
	}
	
	else if(time < 20)
	{
		document.getElementById("timeDiv").innerHTML =
		"It is Day 4";
	}
	
	else if(time < 25)
	{
		document.getElementById("timeDiv").innerHTML =
		"It is Day 5";
	}

}	