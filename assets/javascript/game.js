var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessRemain = 9;

var guessSoFar = [];
var compChoice = options[Math.floor(Math.random() * options.length)];

console.log(compChoice);
console.log(wins);

// var winsText = document.getElementById("Wins-Text");
// var lossesText = document.getElementById("Losses-Text");
// var guessRemainText = document.getElementById("Guesses-Remaining-Text");
// var lettersGuessedText = document.getElementById("Letters-Guessed-Text");
// var 

//-----------------------------------------------------------



document.onkeyup = function(event) {
    userGuess = event.key;
    guessSoFar.push(event.key);
    document.getElementById("Letters-Guessed-Text").textContent = "Letters You've already guessed: " + guessSoFar;
    document.getElementById("Guesses-Remaining-Text").textContent = "Guesses You Have Left: " + guessRemain;
    document.getElementById("Losses-Text").textContent = "Losses: " + losses;
    document.getElementById("Wins-Text").textContent = "Wins: " + wins;
    // lettersGuessedText = "Letter's You Already Guessed:" + guessSoFar;
    console.log(userGuess)
    

    if (userGuess === compChoice) {
        wins++;
        guessSoFar = [];
        guessRemain = 9;
        alert("Well Done! Try your luck again?");
    }
    else {
        guessRemain--;
    }

    if (guessRemain === 0) {
        losses++;
    }

    


    //put the key that was pressed by the user into a bank
    //compare the user guess to the computers choice
    // determine if the user guess is equal/not equal to the computers choice 
    //to document the users win if the user guess is == the computer choice
    
    
    
    
    
    
    
    
    // //String.fromCharCode(event.keyCode).toLowerCase();
    // //if (options.indexOf(userGuess) > -1 ) {
    //     document.getElementById("Guesses-Remaining").innerHTML = guessRemain--;
    // }

 
}


