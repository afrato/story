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
	
	//add 4 points
	var apple = 4
}
