//hangman game
function startGame() {
    let answers = [
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
    let answer = "";
    let lives = 5;
    let won = 0;
    let lost = 0;
    let guessed = [];
    let i = Math.floor(Math.random() * answers.length);
    answer = answers[i];
};

startGame();

function createKeyboard() {
    let keys = "abcedefghijklmnopqrstuvwxyz".split("").map(letter =>
        `
        <button id='` + letter + `' onClick="guessAnswer('` + letter + `')">
        ` + letter + `
      </button>
    `).join(''); //removes the commas separting buttons

  document.getElementById('letters').innerHTML = keys;
};

createKeyboard();

function guessAnswer(key) {
    guessed.indexOf(key) === -1 ? guessed.push(key) : null;
    document.getElementById(key).setAttribute('disabled', true);
    if (answer.indexOf(key) >=0) {
        makeGuess();
    } else {
lifeLost();
    }
}

function lifeLost() {
    lives = lives-1;
    document.getElementById("lives").innerHTML = lives;
};