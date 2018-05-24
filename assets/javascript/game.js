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

var wordToGuess = words.[Math.floor(Math.random()*words.length)];

var dashes = [];
for (var i = 0; i < wordToGuess; i++) {
dashes[i] = "_";
}
