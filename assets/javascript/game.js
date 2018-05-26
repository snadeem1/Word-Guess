var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesSoFar = [];

var words = [
    "Important", 
    "Macaroni", 
    "Engineer", 
    "Javascript", 
    "Champion",
    "Pastry",
    "Arizona",
    "England"
];

var wordToGuess = words[Math.floor(Math.random() * words.length)];

var answerSlot = [];
for (var i = 0; i < wordToGuess; i++) {
answerSlot[i] = "_";
document.querySelector('#word').innerHTML = "Guess the word " + answerSlot;
};

var remainingletters = wordToGuess.length;

var newGuessesSoFar = function() {
    document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessesSoFar.join(', ');
        
};

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
     guessesSoFar.push(userGuess);

if (remainingletters == 0 && userGuess !== wordToGuess ){
    losses++;
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert('Try again');
}




}
