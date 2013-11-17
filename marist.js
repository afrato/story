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
}