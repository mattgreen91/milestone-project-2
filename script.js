//hangman game
let answers = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus"
    "neptune"
    "pluto"
];

let answer = " ";
let lives = 5;
let won = 0;
let lost = 0;
let guessed = [];

function guessAnswer() {
    let i = Math.floor(Math.random() * answers.length);
    answer = answers.length[i];
};

function createKeys() {
    let keys = "abcedefghijklmnopqrstuvwxyz".split(" ").map();
};

guessAnswer();
