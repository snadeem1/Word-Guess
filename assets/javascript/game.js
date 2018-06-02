var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesSoFar = [];
var answerSlot = [];
var wordToGuess = "";
var remainingLetters = 0;
var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/win.mp3");
        
    
        
       
          


var words = [
    "important", 
    "macaroni", 
    "engineer", 
    "javascript", 
    "champion",
    "pastry",
    "arizona",
    "england",
    "gazebo",
    "oxygen",
    "fishhook"
];

// dashes for the wordToGuess
function wordGuess(answerSlot)
{
document.querySelector('#word').innerHTML = "Guess the word : " + "  " + answerSlot.join(" ");
}

// show the guessed letters so far
var newGuessesSoFar = function() {
   document.querySelector('#let').innerHTML = "Your Guesses so far : " + guessesSoFar.join(', ');
       
};

// updated number for remaining guesses
var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left : " + guessesLeft;
  };



  // reset game after wins or losses
var ResetGame = function()
{
guessesLeft = 10;
guessesSoFar = [];
answerSlot = [];
newGuessesSoFar();
updateGuessesLeft();
wordToGuess = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < wordToGuess.length; i++) {
answerSlot.push("_");
document.querySelector('#word').innerHTML = "Guess the word : " + "  " + answerSlot.join(" ");
};

remainingletters = wordToGuess.length;
};

// reset the whole game by pressin the reset button
var NewGame = function()
{
    
wins = 0;
document.querySelector('#wins').innerHTML = "Wins : " + wins;
losses = 0;
document.querySelector('#losses').innerHTML = "Losses : " + losses;
guessesLeft = 10;
guessesSoFar = [];
answerSlot = [];
newGuessesSoFar();
updateGuessesLeft();
wordToGuess = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < wordToGuess.length; i++) {
answerSlot.push("_");
document.querySelector('#word').innerHTML = "Guess the word : " + "  " + answerSlot.join(" ");
};

remainingletters = wordToGuess.length;
};




ResetGame();
updateGuessesLeft();

remainingLetters = wordToGuess.length;

//userguess choice
document.onkeyup = function(event) {
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   // dont repeat same letter
   for (var x = 0; x < guessesSoFar.length; x++){
    if (userGuess == guessesSoFar[x]){
        alert('You already selected this letter');
        return;
    }
    }
    //add user guess to guesse so far
    guessesSoFar.push(userGuess);
    newGuessesSoFar();
    
    // reduce guesses left each time
    guessesLeft--;
    updateGuessesLeft();

    
        //check if the user guess matches to the word to guess letter
      for (var j = 0; j < wordToGuess.length; j++) {
            if (wordToGuess[j] == userGuess) {
            
                // if yes then show the userguess in the answer slot
                 answerSlot[j] = userGuess;

                 //reduce the remaining letters number
                 remainingletters--;

                 wordGuess(answerSlot);

            }
        }


if (remainingletters === 0){
    debugger
     wins++;
     document.querySelector('#wins').innerHTML = "Wins: " + wins;
     
     audioElement.play();
     alert('Wow you got it right!');
     ResetGame();
     
        }

else if(guessesLeft === 0)
{
   losses++;
   document.querySelector('#losses').innerHTML = "Losses : " + losses;
   alert('Sorry You lost! Your word was  ' + '"' + wordToGuess + '"');
   ResetGame();
}
}

updateGuessesLeft();

