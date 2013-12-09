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
}
//Send the user to EAT
function userEat()
{	
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"Where would you like to go?" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Show Eat
	document.getElementById("eatDiv").style.display="block"
	counterA();
	
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
	var a = 1;
	counterA();
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
	var a = 1;
	counterA();
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
	var a = 1;
	counterA();
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
	counterMinus(0);
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
	counterA();
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
	
function day(c)
{
	var y = 0;
	while(y<=5)
	{
		c = y;
		y++;
	}
} 

function counterPlus(y)
{
	var a = y + 1;
	y = a;
	
}
function counterMinus(z)
{
	var b = z -1;
	z = b;
}