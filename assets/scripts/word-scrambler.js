// creates two variables the category and it's scrambled words

var category;
var categoryScrambled;

// collects the objects arrays from JSON file

$("#change-objects").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.objects;
    categoryScrambled = gameData.objects_scrambled;
    $.fn.rand(category, categoryScrambled);
});
});

// collects the galaxies arrays from JSON file

$("#change-galaxies").on("click", function(gameData) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.galaxies;
    categoryScrambled = gameData.galaxies_scrambled;
    $.fn.rand(category, categoryScrambled);
});
});

// collects the moons arrays from JSON file

$("#change-moons").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.moons;
    categoryScrambled = gameData.moons_scrambled;
    $.fn.rand(category, categoryScrambled);
});
});

// collects the planets arrays from JSON file

$("#change-planets").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.planets;
    categoryScrambled = gameData.planets_scrambled;
    $.fn.rand(category, categoryScrambled);
});
});

// creats a random number, and takes the word in this array position

$.fn.rand = function(category, categoryScrambled) {

let rand = Math.floor(Math.random() * category.length);
let word = category[rand].toUpperCase();
let scramble = categoryScrambled[rand].toUpperCase();

console.log(word);
console.log(scramble);

// reset text field to blank  
$('input[type="text"]').val("");
// next game
$(".scrambled-word").text(scramble);
// when submit button is pressed
$("#word-scrambler-game").on("submit", function(event) {
  event.preventDefault();
  let $submit = $(this).find("[type=text]");
  let answer = $submit.val().toUpperCase();
  // checks if the answer typed matches the word
  console.log(answer);
  if (answer == word) {
    // displays the result
    alert("Well done! You got it right :)");
    $('input[type="text"]').val("");
    $(".scrambled-word").text(category[rand]);
  } else {
    alert("Sorry, that was the wrong answer :(\nPlease try again")
  }
});
}