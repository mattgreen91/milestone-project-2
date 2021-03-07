//hangman game

window.onload = resetGame();

var gameAnswerLetters;
var hiddenAnswerLetters;
var gameAnswer;

function resetGame() {
    //new game starts with won and lost as 0-0
    let won = 0;
    let lost = 0;
    //reset game passes reset won and lost values into buildGame function
    buildGame(won, lost);
}

//buildGame recieves the won and lost values from resetGame, or checkWon fuction
function buildGame(score1, score2) {
    buildKeyboard();
    won = score1;
    lost = score2;

    console.log(won);
    console.log(lost);

    document.getElementById('won').innerHTML = won;
    document.getElementById('lost').innerHTML = lost;


    let allAnswers = [
        "mercury",
        "venus",
        "earth",
        "mars",
        "jupiter",
        "saturn",
        "uranus",
        "neptune",
        "pluto"
    ];

    //selects one answer randomly
    let i = Math.floor(Math.random() * allAnswers.length);
    gameAnswer = allAnswers[i];
    //converts the word into an array of letters
    gameAnswerLetters = gameAnswer.split('');
    //creates an empty array of hidden answer letters
    hiddenAnswerLetters = [];
    //loop will replace the letter with a "-" for the length of the gameAnswer
    for (i = 0; i < gameAnswer.length; i++)
        hiddenAnswerLetters.push("-");

    //writes the hidden word on the screen
    document.getElementById('word').innerHTML = hiddenAnswerLetters.join();

}

//function creates a keyboard layout
function buildKeyboard() {
    //spits letters into individal arrays
    let keys = "abcedefghijklmnopqrstuvwxyz".split("").map(letter =>
        //arrays are assigned individual buttons
        `
        <button id='` + letter + `' onClick="guessAnswer('` + letter + `')">
        ` + letter + `
        </button>
        `
        //join removes the commas separting buttons
    ).join('');
    //the letters are written onto the button
    document.getElementById('letters').innerHTML = keys;
}

//when a key is pressed, this function will check it matches the word in the game
function guessAnswer(key) {
    let guess = [];
    guess.indexOf(key) === -1 ? guess.push(key) : null;
    //this disables the button once it has been pressed
    document.getElementById(key).setAttribute('disabled', true);
    let i = 0;
    //this loop searches if the key pressed matches any letters in the the game answer
    while (i < gameAnswer.length) {
        if (key === gameAnswerLetters[i]) {
            hiddenAnswerLetters[i] = gameAnswerLetters[i];
            document.getElementById('word').innerHTML = hiddenAnswerLetters.join();
        } i++;
    }
}
