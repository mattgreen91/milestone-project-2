// creates two variables the category and it's scrambled words

var category;
var categoryScrambled;
var rand;
var word;
var scramble;
var won = 0;
var lost = 0;

// collects the objects arrays from JSON file

$("#change-objects").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.objects;
    categoryScrambled = gameData.objects_scrambled;
    $.fn.scramble();
    console.log("after clicking category button, the list of words is " + category);
});
});

// collects the galaxies arrays from JSON file

$("#change-galaxies").on("click", function(gameData) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.galaxies;
    categoryScrambled = gameData.galaxies_scrambled;
    $.fn.scramble();
    console.log("after clicking category button, the list of words is " + category);
});
});

// collects the moons arrays from JSON file

$("#change-moons").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.moons;
    categoryScrambled = gameData.moons_scrambled;
    $.fn.scramble();
    console.log("after clicking category button, the list of words is " + category);
});
});

// collects the planets arrays from JSON file

$("#change-planets").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.planets;
    categoryScrambled = gameData.planets_scrambled;
    $.fn.scramble();
    console.log("after clicking category button, the list of words is " + category);
});
});

// creats a random number, and takes the word in this array position

$.fn.scramble = function() {

$("#lost").text(lost);
$("#won").text(won);

rand = Math.floor(Math.random() * category.length);
word = category[rand].toUpperCase();
scramble = categoryScrambled[rand].toUpperCase();

console.log("i'm the list of words before the game starts "+ category);

// next game
$(".scrambled-word").text(scramble);
// when submit button is pressed
$("#word-scrambler-game").on("submit", function(event) {
  console.log("after pressing submit, the the list of words is " + category);
  let answer = $("#scramble-guess").val().toUpperCase();
  if(answer){
      console.log("after checking answer is answer, the list of words is " + category);
      event.preventDefault();
    // checks if the answer typed matches the word
    console.log(answer);
    if (answer == word) {
        console.log("when the answer is right, the list of words is " + category);
        // displays the result
        alert('Well done! "' + word.toLowerCase() + '" was the correct\nYou got it right :)');
        won++;
        $("#scramble-guess").val("");
        $.fn.scramble();
    } else {
        console.log("when the answer is wrong, the list of words is " + category);
        alert('Sorry "' + answer.toLowerCase() + '" was not correct\nthe correct answer was "' + word.toLowerCase() + '"');
        lost++
        $("#scramble-guess").val("");
        $.fn.scramble();
        }
    }
});
};