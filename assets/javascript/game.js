var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesSoFar = [];
var answerSlot = [];
var wordToGuess = "";
var remainingLetters = 0;

var words = [
    "important", 
    "macaroni", 
    "engineer", 
    "javascript", 
    "champion",
    "pastry",
    "arizona",
    "england"
];


function wordGuess(answerSlot)
{

document.querySelector('#word').innerHTML = "Guess the word " + answerSlot.join(" ");


}

var newGuessesSoFar = function() {
   document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessesSoFar.join(', ');
       
};

var updateGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
  };


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
document.querySelector('#word').innerHTML = "Guess the word " + answerSlot.join(" ");
};

remainingletters = wordToGuess.length;
};

var NewGame = function()
{
wins = 0;
document.querySelector('#wins').innerHTML = "Wins: " + wins;
losses = 0;
document.querySelector('#losses').innerHTML = "Losses: " + losses;
guessesLeft = 10;
guessesSoFar = [];
answerSlot = [];
newGuessesSoFar();
updateGuessesLeft();
wordToGuess = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < wordToGuess.length; i++) {
answerSlot.push("_");
document.querySelector('#word').innerHTML = "Guess the word " + answerSlot.join(" ");
};

remainingletters = wordToGuess.length;
};


ResetGame();


updateGuessesLeft();
document.onkeyup = function(event) {
   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
   
   for (var x = 0; x < guessesSoFar.length; x++){
    if (userGuess == guessesSoFar[x]){
        alert('You already selected this letter');
        return;
    }
    }
    guessesSoFar.push(userGuess);
    newGuessesSoFar();
    guessesLeft--;
    updateGuessesLeft();

    

      for (var j = 0; j < wordToGuess.length; j++) {
            if (wordToGuess[j] == userGuess) {
            
                 answerSlot[j] = userGuess;
            

                 wordGuess(answerSlot);

            }
        }


if (remainingletters === 0){
   wins++;
   document.querySelector('#wins').innerHTML = "Wins: " + wins;
      ResetGame();
       alert('Wow you got it right!');
}
else if(guessesLeft === 0)
{
   losses++;
   document.querySelector('#losses').innerHTML = "Losses: " + losses;
   alert('Sorry You lost! Your word was  ' + '"' + wordToGuess + '"');
   ResetGame();
}
}

updateGuessesLeft();

