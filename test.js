var score = 0;
var activities = 0;
var totalscore = 0;
var day = 1;
var LASTDAY = 5;


function showGameStatus()
{		
	alert("Today is day " + day + "." + " You have done " + activites + " activities today out of 5 for a total of " + score + " points.");
	
}

/*CHECK FOR END OF GAME

//check if day is equal to 6. 

*/

var test = 1;

// Function of display message

function displayMessage ( str ) {
 
    document.getElementById('outputDiv').innerHTML =
        str + '<br><br>' + document.getElementById('outputDiv').innerHTML;
} 
// Function of the end activity

function endActivity( points ) {
	score = score + points;
    	activities++;
    	
    if (activities === 5) {
        day = day + 1;
        alert("You have reached " + day + "!");   
}
}

function endofGame() {
	if (day = 6) {
		alert("You have finished the game! Your total score is");
	}
	
}

//Start the game
function createUser()
{
	//Global Variables
	var user = {
	//Get the user input
	name: document.getElementById("nameBox").value,
	dorm: document.getElementById("dormBox").value,
	}

	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"What would you like to do first?" +
	"<br>" +
	"Hello " + user.name + ", you have started your first day at Marist College!" +
	" You are starting your first year in " + user.dorm + "." +
	" You have 5 days to make the smartest decisions possible for your college journey! These decisions will alter your success rate at Marist College! Good luck!";
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
	//hide activity buttons
	document.getElementById("buttonDiv").style.display="none"
	//display question
	document.getElementById("questionDiv").innerHTML =
	"Where would you like to go to eat?" 
	//Show Eat
	document.getElementById("eatDiv").style.display="block"

}
//Send the user to STUDY
function userStudy()
{
	//hide activity buttons
	document.getElementById("buttonDiv").style.display="none"
	//Display story line
	document.getElementById("questionDiv").innerHTML =
	"Where would you like to study?"
	//Show Study
	document.getElementById("studyDiv").style.display="block"
}
//Send the user to CLUB
function userClub()
{
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Ask questions
	document.getElementById("questionDiv").innerHTML =
	"What activity would you like to take part in?"
	//Show Club
	document.getElementById("clubDiv").style.display="block"
}


//Send the user to CLASS
function userClass()
{
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	//Display story line
	document.getElementById("outputDiv").innerHTML =
	"How many classes would you like to attend?" +
	"<br><br>" + document.getElementById("outputDiv").innerHTML
	//Show class
	document.getElementById("classDiv").style.display="block"
}
	


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

}
//Send the user to HANG WITH FRIENDS
function userFriends()
{
	//Hide Buttons
	document.getElementById("buttonDiv").style.display="none"
	
	//Display story line
	document.getElementById("questionDiv").innerHTML =
	"Where would you like to go to hang out with friends?"

	//Show Hang with friends
	document.getElementById("friendsDiv").style.display="block"
}


//going to class functions

function oneClass()
{
	//hide choice buttons
	document.getElementById("classDiv").style.display="none"
	//display message
	displayMessage("You only attended one of your classes.");
	//update score, activites, and check for end of day
	endActivity(2);
	
	
}

function allClasses()
{
	//hide choice buttons
	document.getElementById("classDiv").style.display="none"
	//display message
	displayMessage("You attended all of your classes! Good Job!");
	//update score, activities, and check for end of day
	endActivity(4);
	
	
}

function noClasses()
{
	//hide choice buttons
	document.getElementById("classDiv").style.display="none"
	//display message
	displayMessage("You did not attend any of your classes! Try better next time!");
	//update score, activities, and check for end of day
	endActivity(0);

}

//partaking in club or activities 

function soccer()
{
	//hide choice buttons
	document.getElementById("clubDiv").style.display="none"
	//Display message
	displayMessage("You chose to participate in soccer.");
	//check score, activities, and for end of day
	endActivity(2);
}

function ministry()
{
	//hide choice buttons
	document.getElementById("clubDiv").style.display="none"
	//Display message
	displayMessage("You volunteered for community service.");
	//check score, activities, and for the end of day
	endActivity(4);

}
function computer()
{
	//hide choice buttons
	document.getElementById("clubDiv").style.display="none"
	//display message
	displayMessage("Hope you had fun participating in Computer Society!");
	//check score, activities, and for the end of day
	endActviity(3);
}

//functions as to where you ate

function hall()
{
	//hide choice buttons
	document.getElementById("eatDiv").style.display="none"
	//display message
	displayMessage("You chose the Dining Hall for your meal!");
	//check score, activities, and for the end of day
	endActivity(3);
}
function cab()
{
	//hide choice buttons
	doument.getElementById("eatDiv").style.display="none"
	//display message
	displayMessage("You decided on the Caberet to eat!");
	//check score, activites, and for the end of day
	endActivity(2);

}
function apple()
{
	//hide choice buttons
	document.getElementById("eatDiv").style.display="none"
	//display message
	displayMessage("Applebee's was your food choice!");
	//check score, activities, and for the end of the day
	endActivity(4);
}

//functions as to where you hung out with friends

function friendsDorm()
{
	//hide choice buttons
	document.getElementById("friendsDiv").style.display="none"
	//display message
	displayMessage("You are hanging out in your friend's room!");
	//check score, activities, and for the end of the day
	endActivity(2);
}

function theGreen()
{
	//hide choice buttons
	document.getElementById("friendsDiv").style.display="none"
	//display message
	displayMessage("You hung out with your friends on the beautiful campus green!");
	//check score, activities, and for the end of the day
	endActivity(3);
}

function riverSide()
{
	//hide choice buttons
	document.getElementById("friendsDiv").style.display="none"
	//display message
	displayMessage("You hung out with you friends on the Marist River front!");
	//check score, activities, and for the end of the day
	endActivity(4);
}

//functions where you worked on homework

function room()
{
	//hide choice buttons
	document.getElementById("studyDiv").style.display="none"
	//display message
	displayMessage("You chose to study in your room.");
	//check score, activities, and for the end of the day
	endActivity(3);
	
}
function sFriends()
{
	//hide choice buttons
	document.getElementById("studyDiv").style.display="none"
	//display message
	displayMessage("You worked on homework with your friends.");
	//check score, activities, and for the end of the day
	endActivity(2);

}

function library() {
	//hide choice buttons
	document.getElementById("studyDiv").style.display="none"
	//display message
	displayMessage("You studied in the library!");
	//check score, activities, and for the end of the day
	endActivity(4);	
}

