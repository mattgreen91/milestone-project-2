console.log("The game will begin when a category is chosen");

// creates two variables the category and it's scrambled words

var category;
var categoryScrambled;
var rand;
var word;
var scramble;
var won = 0;
var lost = 0;

// collects the objects arrays from JSON file

$("#change-objects").on("click", function (event) {
    $.getJSON("./assets/json/word-scrambler.json", function (gameData) {
        category = gameData.objects;
        categoryScrambled = gameData.objects_scrambled;
        $.fn.scramble();
        console.log(
            "General Space was selected.  The list of words are " + category
        );
    });
});

// collects the galaxies arrays from JSON file

$("#change-galaxies").on("click", function (gameData) {
    $.getJSON("./assets/json/word-scrambler.json", function (gameData) {
        category = gameData.galaxies;
        categoryScrambled = gameData.galaxies_scrambled;
        $.fn.scramble();
        console.log(
            "Galaxy Names was selected.  The list of words are " + category
        );
    });
});

// collects the moons arrays from JSON file

$("#change-moons").on("click", function (event) {
    $.getJSON("./assets/json/word-scrambler.json", function (gameData) {
        category = gameData.moons;
        categoryScrambled = gameData.moons_scrambled;
        $.fn.scramble();
        console.log(
            "Moon Names was selected.  The list of words are " + category
        );
    });
});

// collects the planets arrays from JSON file

$("#change-planets").on("click", function (event) {
    $.getJSON("./assets/json/word-scrambler.json", function (gameData) {
        category = gameData.planets;
        categoryScrambled = gameData.planets_scrambled;
        $.fn.scramble();
        console.log(
            "Planet Names was selected.  The list of words are " + category
        );
    });
});

// creats a random number, and takes the word in this array position

$.fn.scramble = function () {
    $("#lost").text(lost);
    $("#won").text(won);

    rand = Math.floor(Math.random() * category.length);
    word = category[rand].toUpperCase();
    scramble = categoryScrambled[rand].toUpperCase();

    // next game
    $(".scrambled-word").text(scramble);
    // change word
    $("#change-word").on("click", function (event) {
        $("#scramble-guess").val("");
        $.fn.scramble();
    });
    $("#word-scrambler-game").on("submit", function (event) {
        console.log("after pressing submit, the list of words is " + category);
        let answer = $("#scramble-guess").val().toUpperCase();
        if (answer) {
            event.preventDefault();
            // checks if the answer typed matches the word
            console.log("The correct word is " + word);
            console.log("The word " + answer + " was typed into the box");
            if (answer == word) {
                console.log("the answer was correct.  New game begins");
                // displays the result
                alert(
                    'Well done! "' +
                    word.toLowerCase() +
                    '" was the correct\nYou got it right :)'
                );
                won++;
                $("#scramble-guess").val("");
                $.fn.scramble();
            } else {
                console.log("therefore the answer was wrong.  A new word will display on the screen to guess");
                alert(
                    'Sorry "' +
                    answer.toLowerCase() +
                    '" was not correct\nthe correct answer was "' +
                    word.toLowerCase() +
                    '"'
                );
                lost++;
                $("#scramble-guess").val("");
                $.fn.scramble();
            }
        }
    });
};
