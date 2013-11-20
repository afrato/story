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
}