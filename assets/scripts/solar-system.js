// below selects the DIV elements containing the images of planets

var sun_card = document.getElementById("sun");
var mercury_card = document.getElementById("mercury");
var venus_card = document.getElementById("venus");
var earth_card = document.getElementById("earth");
var mars_card = document.getElementById("mars");
var jupiter_card = document.getElementById("jupiter");
var saturn_card = document.getElementById("saturn");
var uranus_card = document.getElementById("uranus");
var neptune_card = document.getElementById("neptune");
var pluto_card = document.getElementById("pluto");

// below functions convert the pop-up from 'display: none' to 'display: block' when the button is clicked on

function sun() {
  sun_card.style.display = "block";
  console.log("pop-up facts about Sun is shown");
}

function mercury() {
  mercury_card.style.display = "block";
  console.log("pop-up facts about Mercury is shown");
}

function venus() {
  venus_card.style.display = "block";
  console.log("pop-up facts about Venus is shown");
}

function earth() {
  earth_card.style.display = "block";
  console.log("pop-up facts about Earth is shown");
}

function mars() {
  mars_card.style.display = "block";
  console.log("pop-up facts about Mars is shown");
}
function jupiter() {
  jupiter_card.style.display = "block";
  console.log("pop-up facts about Jupiter is shown");
}
function saturn() {
  saturn_card.style.display = "block";
  console.log("pop-up facts about Saturn is shown");
}
function uranus() {
  uranus_card.style.display = "block";
  console.log("pop-up facts about Uranus is shown");
}
function neptune() {
  neptune_card.style.display = "block";
  console.log("pop-up facts about Neptune is shown");
}
function pluto() {
  pluto_card.style.display = "block";
  console.log("pop-up facts about Pluto is shown");
}

// below functions convert the pop-up from 'display: block' to 'display: none' when the button or DIV is clicked on again

function close_sun() {
  sun_card.style.display = "none";
}

function close_mercury() {
  mercury_card.style.display = "none";
}

function close_venus() {
  venus_card.style.display = "none";
}

function close_earth() {
  earth_card.style.display = "none";
}

function close_mars() {
  mars_card.style.display = "none";
}

function close_jupiter() {
  jupiter_card.style.display = "none";
}

function close_saturn() {
  saturn_card.style.display = "none";
}

function close_uranus() {
  uranus_card.style.display = "none";
}
function close_neptune() {
  neptune_card.style.display = "none";
}

function close_pluto() {
  pluto_card.style.display = "none";
}
