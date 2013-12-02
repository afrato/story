function yourRoom()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You stayed in your room to play video games." +
	"<br> 2 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("vidgameDiv").style.display="none"
}

function friendsRoom()
{
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do now?" +
	"<br> You went to your friend's house to play video games!" +
	"<br> 4 hours of your time was spent doing so." +
	"<br><br>" + document.getElementById("outputDiv").innerHTML;
	//Show Output
	document.getElementById("outputDiv").style.display="block"
	//Show Buttons
	document.getElementById("buttonDiv").style.display="block"
	//Hide Study
	document.getElementById("vidgameDiv").style.display="none"
}