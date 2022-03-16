// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.getElementById("speakButton");
var nounButton =  document.getElementById("noun");
var verbButton =  document.getElementById("verb");
var adjButton =  document.getElementById("adj");
var nounsButton =  document.getElementById("nouns");
var settingButton =  document.getElementById("setting");
var doneButton = document.getElementById("done");
var replayButton = document.getElementById("replay");
var surpriseButton = document.getElementById("surprise");
var resetButton = document.getElementById("reset");

//creating arrays for each section
var noun = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
var verb = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
var adj = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
var nouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
var setting = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// initializing the counter for the output of the arrays
var nounCounter = -1;
var verbCounter = -1;
var adjCounter = -1;
var nounsCounter = -1;
var settingCounter = -1;

//Creating a random number for the arrays that contain 7 elements for the surprise button
var randomSeven = Math.floor((Math.random() * 7) + 0);

//Creating a random number for the arrays that contain 6 elements for the surprise button
var randomSix = Math.floor((Math.random() * 6) + 0);

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

//Function is called if the noun button is pressed
function nounFunction() {
	//move up one element in the array
	nounCounter++;

	//if i reach the max elements in my array send it back to the first element
	if(nounCounter == 8) {
		nounCounter = 0;
	}	
}

//Function is called if the verb button is pressed
function verbFunction() {
	//move up one element in the array
	verbCounter++;

	//if i reach the max elements in my array send it back to the first element
	if(verbCounter == 7) {
		verbCounter = 0;
	}
}

//Function is called if the adj button is pressed
function adjFunction() {
	//move up one element in the array
	adjCounter++;

	//if i reach the max elements in my array send it back to the first element
	if(adjCounter == 7) {
		adjCounter = 0;
	}
}

//Function is called if the nouns button is pressed
function nounsFunction() {
	//move up one element in the array
	nounsCounter++;

	//if i reach the max elements in my array send it back to the first element
	if(nounsCounter == 8) {
		nounsCounter = 0;
	}
}

//Function is called if the setting button is pressed
function settingFunction() {
	//move up one element in the array
	settingCounter++;

	//if i reach the max elements in my array send it back to the first element
	if(settingCounter == 7) {
		settingCounter = 0;
	}
}


/* Event Listeners
-------------------------------------------------- */

//onclick events for when user presses the buttons

//if the noun button is pressed
nounButton.onclick = function() {
	//call function
	nounFunction(nounCounter);

	//the voice will speak for every element in the array that you are currently on
	speakNow(noun[nounCounter]);
}

//if the verb button is pressed
verbButton.onclick = function() {
	//call function
	verbFunction(verbCounter);

	//the voice will speak for every element in the array that you are currently on
	speakNow(verb[verbCounter]);
}

//if the adj button is pressed
adjButton.onclick = function() {
	//call function
	adjFunction(adjCounter);

	//the voice will speak for every element in the array that you are currently on
	speakNow(adj[adjCounter]);
}

//if the nouns button is pressed
nounsButton.onclick = function() {
	//call function
	nounsFunction(nounsCounter);

	//the voice will speak for every element in the array that you are currently on
	speakNow(nouns[nounsCounter]);
}

//if the setting button is pressed
settingButton.onclick = function() {
	//call function
	settingFunction(settingCounter);

	//the voice will speak for every element in the array that you are currently on
	speakNow(setting[settingCounter]);
}

//if the done button is pressed
doneButton.onclick = function() {
	//Write the stroy out in text form/ replace the paragraph element in my html
	document.getElementById("story").innerHTML = noun[nounCounter] + " " + verb[verbCounter] + " " + adj[adjCounter] + " " + nouns[nounsCounter] + " " + setting[settingCounter];
	
	//will voiceover the whole story
	textToSpeak = noun[nounCounter] + " " + verb[verbCounter] + " " + adj[adjCounter] + " " + nouns[nounsCounter] + " " + setting[settingCounter];
	speakNow(textToSpeak);
}

//if the replay button is pressed
replayButton.onclick = function() {
	//will voiceover the whole story
	textToSpeak = noun[nounCounter] + " " + verb[verbCounter] + " " + adj[adjCounter] + " " + nouns[nounsCounter] + " " + setting[settingCounter];
	speakNow(textToSpeak);
}

//if the surprise button is pressed
surpriseButton.onclick = function() {
	//will voiceover the whole story
	textToSpeak = noun[randomSeven] + " " + verb[randomSix] + " " + adj[randomSix] + " " + nouns[randomSeven] + " " + setting[randomSix];
	speakNow(textToSpeak);
	//Write the stroy out in text form/ replace the paragraph element in my html
	document.getElementById("story").innerHTML = noun[randomSeven] + " " + verb[randomSix] + " " + adj[randomSix] + " " + nouns[randomSeven] + " " + setting[randomSix];;

	//if the surpirse button is hit and then the replay button is hit after
	replayButton.onclick = function() {
		//will voiceover the whole story
		textToSpeak = noun[randomSeven] + " " + verb[randomSix] + " " + adj[randomSix] + " " + nouns[randomSeven] + " " + setting[randomSix];
		speakNow(textToSpeak);
	}
}

//if the reset button is pressed
resetButton.onclick = function() {
	//set everything back to the way it started
	nounCounter = -1;
	verbCounter = -1;
	adjCounter = -1;
	nounsCounter = -1;
	settingCounter = -1;
	document.getElementById("story").innerHTML = "";

	//Resetting the random variable so when you hit surprise after resetting it gives you a different story
	randomSeven = Math.floor((Math.random() * 7) + 0);
	randomSix = Math.floor((Math.random() * 6) + 0);
}