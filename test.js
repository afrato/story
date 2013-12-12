var score = 0;
var activites = 0;
var totalscore = 0;
var day = 1;
var totalday = 0;


function counterA()
{
	if(activities>=5)
	{
		alert("Today is day " + day + "." + " You have done " + totalday + " activities today.");
		
		if(day>=x)
		{
			alert("You have reached finals. Your total score is " + totalscore + ".");
		}
	} 
	else if(x<=5)
	{
		alert("Today is day " + day + "." + " You have done " + score + " activities today out of 5.");
	}
}
function getTotalScore()
{
	if(day>=x)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
	else
	{
		alert("Your total score is " + totalscore + ".");
	}
} 



var test = 1;

//Start the game
function createUser()
{
	//Global Variables
	var user = {
	//Get the user input
	name: document.getElementById("nameBox").value,
	dorm: document.getElementById("dormBox").value,
	day: document.getElementById("dayBox").value,
	}
	totalday = document.getElementById("dayBox").value;
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do first?" +
	"<br>" +
	"Hello " + user.name + ", you have started your first day at Marist College!" +
	" You are starting your first year in " + user.dorm + "." +
	" You have made it through the entire semester and now you only have " + 
	user.day + " days until finals, Good luck!";
	//Hide Input
	document.getElementById("inputDiv").style.display="none"
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Input
	document.getElementById("inputDiv").style.display="none"
	//Show Output
	document.getElementById("questionDiv").style.display="block"
}
//Send the user to EAT
function userEat()
{	
	//Display story line
	document.getElementById("questionDiv").innerHTML =
	"Where would you like to go?" 
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Show Eat
	document.getElementById("eatDiv").style.display="block"
	if(score>=totalday)
	{
		day++;
		alert("Today is day " + day + "." + " You have reach the daily score of " + totalday + ".");
		totalscore = totalscore + score;
				score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
//Send the user to STUDY
function userStudy()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"Where would you like to go?" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Show Study
	document.getElementById("studyDiv").style.display="block"
	if(score>=totalday)
	{
		day++;
		alert("Today is day " + day + "." + " You have reach the daily score of " + totalday + ".");

		totalscore = totalscore + score;
				score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
//Send the user to CLUB
function userClub()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"Where would you like to go?" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Show Club
	document.getElementById("clubDiv").style.display="block"

	if(score>=totalday)
	{
		day++; 
		alert("Today is day " + day + "." + " You have reach the daily score of " + totalday + ".");

		totalscore = totalscore + score;
				score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
//Send the user to CLASS
function userClass()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"Would you like to attend class?" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Show Eat
	document.getElementById("classDiv").style.display="block"

	if(score>=totalday)
	{
		day++;	
		alert("Today is day " + day + "." + " You have reached day " + totalday + ".");
		
		totalscore = totalscore + score;
				score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

/*function dayDiv()
{
	document.getElementById("dayDiv").style.display=""
}*/

//Return to Menu
function back()
{
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Eat
	document.getElementById("eatDiv").style.display="none"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("studyDiv").style.display="none"
	//Hide Study
	document.getElementById("clubDiv").style.display="none"
		score--;
	x++;
	 
	if(score>=totalday)
	{
		alert("You have reached day " + totalday + ".");	
		day++;
		score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
//Send the user to HANG WITH FRIENDS
function userFriends()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"Where would you like to go to hang out with friends?" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Show Hang with friends
	document.getElementById("friendsDiv").style.display="block"

	if(score>=totalday)
	{
		day++; 
		alert("You have reached day " + day + ".");
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
//can take part in 5 activities per day
//after 5 activities, the next day starts
/*function time()
{
	//Global Variable
	var time = 1
	while(time>5)
	{
		//var x = getElementById.value(time);
		alert("Today is Day " + time);
		time++;
	}
} */

function mathClass()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You attended your Math class!" +
	"<br> 2 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("classDiv").style.display="none"
		score++;
	x++;

	
	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function engClass()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You attended your English class!" +
	"<br> 2 hours of your time was spent doing so." + 
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("classDiv").style.display="none"
		score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function sciClass()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You attended your Science class!" +
	"<br> 2 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	documenst.getElementById("classDiv").style.display="none"
	score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function soccer()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> You go to soccer practice." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Club
	document.getElementById("clubDiv").style.display="none"
		score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function ministry()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> You volunteer for community service." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Club
	document.getElementById("clubDiv").style.display="none"
	score++;
	x++;

	if(score>=totalday)
	{
		day++; alert("You have reached day " + day + ".");	
		score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
function computer()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> Someone found the bug in your program!" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Club
	document.getElementById("clubDiv").style.display="none"
		score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function hall()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> 2 hours have past and you are now satisfied." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Eat
	document.getElementById("eatDiv").style.display="none"
	x++;
	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
function cab()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do?" +
	"<br> 2 hours have past, you spent $5 and you are now satisfied." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Eat
	document.getElementById("eatDiv").style.display="none"
x++;
	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
function apple()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do?" +
	"<br> 3 hours have past, you spent $12 and you are now satisfied." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Eat
	document.getElementById("eatDiv").style.display="none"
	x++;
	//add 4 points
	var apple = 4

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function friendsDorm()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You hung out with your friends in their dorm room!" +
	"<br> 4 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Hang with friends
	document.getElementById("friendsDiv").style.display="none"
		score--;
	x++;
	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function theGreen()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You hung out with your friends on the beautiful campus green!" +
	"<br> 4 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Hang with friends
	document.getElementById("friendsDiv").style.display="none"
		score--;
	x++;
	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function riverSide()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You hung out with your friends by the river!" +
	"<br> 4 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Hang with Friends
	document.getElementById("friendsDiv").style.display="none"
		score--;
	x++;
	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function room()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> Good job! You studied for 3 hours." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("studyDiv").style.display="none"
		score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
function sFriends()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> You worked on homework with your friends for 4 hours." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("studyDiv").style.display="none"
		score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
function sFriends()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	" What would you like to do?" +
	"<br> You worked on homework with your friends for 4 hours." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("studyDiv").style.display="none"
		score++;
	x++;

	if(score>=totalday)
	{
		day++;
		alert("You have reached day " + day + ".");	
		totalscore = totalscore + score;
		score = 0;
	} 
	if(day>=totalday)
	{
		totalscore = totalscore + score;
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}

function library()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do?" +
	"<br> Way to go! You studied in the Library for 3 hours." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("studyDiv").style.display="none"
		score = score + 4;
		activities++;
	x++;

	if(score>=totalday)
	{
		day++; alert("You have reached day " + day + ".");	
		score = 0;
	} 
	if(day>=totalday)
	{
		alert("You have reached finals. Your total score is " + totalscore + ".");
	}
}
