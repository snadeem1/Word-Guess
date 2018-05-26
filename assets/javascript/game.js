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

var wordToGuess = words[Math.floor(Math.random() * words.length)]; { 
    console.log(wordToGuess);
};
    

var answerSlot = [];
for (var i = 0; i < wordToGuess.length; i++) {
answerSlot[i] = "_";
console.log(answerSlot);
}
var wordShow = document.getElementById("word");
wordShow.innerHTML = answerSlot.join(" ");

var remainingLetters = wordToGuess.length;




