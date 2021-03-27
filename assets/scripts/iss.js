function initMap() {

    let origin = {
      lat : 0,
      lng : 0
  };

  /* creates a new map, and centers the map at 0,0 */

const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: origin,
    streetViewControl: false,
    mapTypeId: "satellite",
    scaleControl: true,
  });


  
/* uses ISS image instead of default google marker */

let image = 'assets/images/iss.png';

  let marker = new google.maps.Marker({
    position: origin,
    map: map,
    icon: image
  });

  /* gets location from JSON file on API "where is the ISS at" */

setInterval(async function getLocation() {

let url = 'https://api.wheretheiss.at/v1/satellites/25544';
let location = await fetch(url);
let locationISS = await location.json();

/* takes the latitude and longitude coordinates */

let latitude = locationISS.latitude;
let longitude = locationISS.longitude;

/* converts latitude and longitude into integers, so google maps can plot on the map */

let track = {
      lat : parseFloat(latitude),
      lng : parseFloat(longitude)
  };

/* writes the longitute and latitude coordinates on the page */

document.getElementById('latitude').innerHTML = "The latitude of ISS is " + track.lat;  
document.getElementById('longitude').innerHTML = "The longitude of ISS is " + track.lng;

/* updates the marker with the correct location using the coordinates */

var latlng = new google.maps.LatLng(track.lat, track.lng);
marker.setPosition(latlng);

/* refreshes every 5 seconds (5000 miliseconds) for "live" location */

console.log(track);
}, 5000);
}