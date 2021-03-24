// imports categories from JSON file
$.getJSON("./assets/json/word-scrambler.json", function(gameData) {
    let planets = gameData.planets;
    let galaxies = gameData.galaxies;
    let moons = gameData.moons;
    let objects = gameData.objects;
});

let category = objects;

$("#change-objects").on("click", function(event) {
    category = objects;
});
$("#change-galaxies").on("click", function(event) {
category = galaxies;
});
$("#change-moons").on("click", function(event) {
category = moons;
});
$("#change-planets").on("click", function(event) {
category = planets;
});

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