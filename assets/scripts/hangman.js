//hangman game

window.onload = resetGame();

var gameAnswerLetters;
var hiddenAnswerLetters;
var gameAnswer;
var incorrectGuesses = 0;
var correctLetters = 0;

function resetGame() {
  //new game starts with won and lost as 0-0
  let won = 0;
  let lost = 0;
  //reset game passes reset won and lost values into buildGame function
  buildGame(won, lost);
}

//change word will keep the original score, and then build a new game using these scores
function changeWord() {
  score1 = document.getElementById("won").innerHTML;
  score2 = document.getElementById("lost").innerHTML;
  buildGame(won, lost);
  console.log(won);
  console.log(lost);
}

//buildGame recieves the won and lost values from resetGame, or checkWon fuction
function buildGame(score1, score2) {
  buildKeyboard();

  won = score1;
  lost = score2;

  incorrectGuesses = 0;
  correctLetters = 0;
  wrongLetters = 0;

  document.getElementById("man").src = "assets/images/h0.gif";
  document.getElementById("man").alt = incorrectGuesses + " of 5 lives remaining";
  document.getElementById("won").innerHTML = won;
  document.getElementById("lost").innerHTML = lost;

  let allAnswers = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
  ];

  //selects one answer randomly
  let i = Math.floor(Math.random() * allAnswers.length);
  gameAnswer = allAnswers[i];
  //converts the word into an array of letters
  gameAnswerLetters = gameAnswer.split("");
  //creates an empty array of hidden answer letters
  hiddenAnswerLetters = [];
  //loop will replace the letter with a "-" for the length of the gameAnswer
  for (i = 0; i < gameAnswer.length; i++) hiddenAnswerLetters.push("-");

  //writes the hidden word on the screen
  document.getElementById("word").innerHTML = hiddenAnswerLetters.join("");
}

//function creates a keyboard layout
function buildKeyboard() {
  //spits letters into individal arrays
  let keys = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        //arrays are assigned individual buttons
        `
        <button id='` +
        letter +
        `' class="letter" onClick="guessAnswer('` +
        letter +
        `')">
        ` +
        letter +
        `
        </button>
        `
      //join removes the commas separting buttons
    )
    .join("");
  //the letters are written onto the button
  document.getElementById("letters").innerHTML = keys;
}

//when a key is pressed, this function will disable the key
function guessAnswer(key) {
  let guess = [];
  guess.indexOf(key) === -1 ? guess.push(key) : null;
  //this disables the button once it has been pressed
  document.getElementById(key).setAttribute("disabled", true);
  document.getElementById(key).style.backgroundColor = "#cdcdcd";
  let i = 0;

   //this loop searches if the key pressed matches any letters in the the game answer

  while (i < gameAnswer.length) {
    if (key === gameAnswerLetters[i]) {
      hiddenAnswerLetters[i] = gameAnswerLetters[i];
      correctLetters = correctLetters + 1;
      document.getElementById("word").innerHTML = hiddenAnswerLetters.join("");
    }
    i++;
  }

  if (gameAnswer == document.getElementById("word").innerHTML) {
    
    alert("Well done! You won :) \n The word " + gameAnswer + " was correct");
    won = won + 1;
    changeWord();
}

  //this loop searches if the key pressed matches any letters in the the game answer

let wrongLetters = 0;

i = 0;
  while (i < gameAnswer.length) {
    if (key !== gameAnswerLetters[i]) {
      wrongLetters = wrongLetters + 1;
    }
    i++;
  }

if ((wrongLetters / gameAnswer.length) == 1) {
    incorrectGuesses = incorrectGuesses + 1;
}

  if (wrongLetters == gameAnswer.length) {
      console.log("current incorrect score is " + incorrectGuesses);
      console.log("no. unmatched letters is " + wrongLetters);
      console.log("letters remaining is " + (gameAnswer.length - correctLetters));
    document.getElementById("man").src = "assets/images/h" + incorrectGuesses + ".gif";
    document.getElementById("man").alt = incorrectGuesses + " of 5 lives remaining";
    }

  if (incorrectGuesses == 6) {
    alert("Hangman - You Lost! \n The correct word was " + gameAnswer);
    lost = lost +1;
    changeWord();
    }
}
