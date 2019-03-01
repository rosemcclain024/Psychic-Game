//This is an array that is holding all of my options for the computer choices.
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//these are my variables that are defined by wins and losses to keep up with the score of the user.
var wins = 0;
var losses = 0;

//this is a variable that keeps up with how many guesses the user has left in the game before it qualifies a loss.
var guessRemain = 9;

//This is a variable that holds all of the guesses/letters the user has already pressed. It is an empty array that is built to push things into.
var guessSoFar = [];

//This is an equation that prompts the computer to generate a random key that is pulled from the options array (referenced above).
var compChoice = options[Math.floor(Math.random() * options.length)];

//This is me logging some of the information so that I can see when something is or isn't working.
console.log(compChoice);
console.log(wins);




//This is a function that is basically telling the game that whenever the user presses a key then this function happens.
document.onkeyup = function(event) {
//document is addressing the HTML; .onkeyup is the JS event that is the cause for the function; function() is the direction of JS telling it to run whatever program in the curly brackets ahead; (event) is just a placeholder, it can be anything.

//This is me assigning the var userGuess to event.key basically telling it that whenever the user makes a guess,presses a key, to run this function. 
    userGuess = event.key;

    //This is taking the information from the userGuess(event.key) and pushing it (like we do in the terminal to git) into the array guessSoFar.
    guessSoFar.push(event.key);

    //These next 4 commands are instructions to connect with the HTML file and to write things directly onto the page. We tried to create these as variables themselves and it worked for some and didn't for others! Do what works i guess haha. 
    document.getElementById("Letters-Guessed-Text").textContent = "Letters You've already guessed: " + guessSoFar;
    document.getElementById("Guesses-Remaining-Text").textContent = "Guesses You Have Left: " + guessRemain;
    document.getElementById("Losses-Text").textContent = "Losses: " + losses;
    document.getElementById("Wins-Text").textContent = "Wins: " + wins;

    //This is me logging the userGuess to check on my program.
    console.log(userGuess)
    
    //This is and If statement comparing the userGuess (whatever key the user presses) to the computers choice (compChoice out of the options array) and giving it instructions on what to do if they are the same outcome. 
    if (userGuess === compChoice) {

        //This is a variable that defines the wins of the user and the ++ and telling the game to add 1 for every time the userGuess is equal to the compChoice.
        wins++;

        //This is the users guess so far being reset if the conditions of this statement are met.
        guessSoFar = [];

        //This is the users guess they have left (guessRemain) being reset if the conditions of this statement are met.
        guessRemain = 9;

        //This is me alerting the user that they have made a win if the conditions of this statement are met.
        alert("Well Done! Try your luck again?");
    }

    //This is an else statement declaring that if the conditions about are NOT met, then the users guesses remaining will go down by 1 because they have a set amount of guesses.
    else {

        //-- means that this variable that was originally set to 9 will decrease by 1.
        guessRemain--;
    }

    //This is an if statement that says if the guesses remaining reach 0 at any point that the losses counter will go up by 1.
    if (guessRemain === 0) {
        
        //++ means this variable that was origincally set to 0 will go up (+) by 1.
        losses++;
        guessSoFar = [];
        guessRemain = 9;
    }

   
    


    

 
}


