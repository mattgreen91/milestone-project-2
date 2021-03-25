
var category;

$("#change-objects").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.objects;
    console.log(category);
    $.fn.rand(category);
});
});

$("#change-galaxies").on("click", function(gameData) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.galaxies;
    console.log(category);
    $.fn.rand(category);
});
});

$("#change-moons").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.moons;
    console.log(category);
    $.fn.rand(category);
});
});

$("#change-planets").on("click", function(event) {
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    category = gameData.planets;
    console.log(category); 
    $.fn.rand(category);
});
});

$.fn.rand = function(category) {

let rand = Math.floor(Math.random() * category.length);
let word = category[rand];

// reset text field to blank  
$('input[type="text"]').val("");
// next game
$(".scrambled-word").text(word);
// when submit button is pressed
$("#word-scrambler-game").on("submit", function(event) {
  event.preventDefault();
  let $submit = $(this).find("[type=text]");
  let answer = $submit.val().toUpperCase();
  // checks if the answer typed matches the word
  if (answer === word) {
    // displays the result
    alert("Well done! You got it right :)");
    $('input[type="text"]').val("");
    $(".scrambled-word").text(category[rand]);
  } else {
    alert("Sorry, that was the wrong answer :(\nPlease try again")
  }
});
}