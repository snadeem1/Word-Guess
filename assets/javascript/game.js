var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessesSoFar = [];

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

var wordToGuess = words[Math.floor(Math.random() * words.length)]; { 
    console.log(wordToGuess);
};
    

var answerSlot = [];
for (var i = 0; i < wordToGuess.length; i++) {
answerSlot[i] = "_";
console.log(answerSlot);
}
document.querySelector('#word').innerHTML = "Guess the word  "  + answerSlot.join(" ");

var remainingLetters = wordToGuess.length;

var userGuess = [];
for (var j = 0; j < wordToGuess.length; j++) {
     if (word[j] === userGuess) {
     answerArray[j] = userGuess;
     remainingLetters--;
     }
    }



