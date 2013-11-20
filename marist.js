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
	"Hello " + user.name + ", you have started your first day at Marist College!" +
	" You are starting your first year in " + user.dorm + "." +
	" You have made it through the entire semister and now you only have " + 
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
	//Show Eat
	document.getElementById("studyDiv").style.display="block"
}
//Return to Menu
function back()
{
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Eat
		document.getElementById("eatDiv").style.display="none"
}