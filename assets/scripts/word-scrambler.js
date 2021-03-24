$.getJSON("./assets/json/word-scrambler.json", function(json) {
    console.log(json);
});

// reset text field to blank  
$('input[type="text"]').val("");
// next game
$(".scrambled-word").text("THOGASATURN");
// when submit button is pressed
$("#word-scrambler-game").on("submit", function(event) {
  event.preventDefault();
  let $submit = $(this).find("[type=text]");
  let answer = $submit.val().toUpperCase();
  // checks if the answer typed matches the word
  if (answer === "ASTRONAUGHT" || answer === "astronaught") {
    // displays the result
    alert("Well done! You got it right :)");
    $('input[type="text"]').val("");
    $(".scrambled-word").text("TOCERK");
  } else {
    alert("Sorry, that was the wrong answer :(\nPlease try again")
  }
});