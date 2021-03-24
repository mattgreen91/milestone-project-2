window.onload = initMap();

function initMap() {

    let origin = {
      lat : 0,
      lng : 0
  };
 
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: origin,

  });
  
let image = 'https://icons.iconarchive.com/icons/goodstuff-no-nonsense/free-space/256/international-space-station-icon.png';

  let marker = new google.maps.Marker({
    position: origin,
    map: map,
    icon: image
  });
  
setInterval(async function getLocation() {

let url = 'https://api.wheretheiss.at/v1/satellites/25544';
let location = await fetch(url);
let locationISS = await location.json();

let latitude = locationISS.latitude;
let longitude = locationISS.longitude;

let track = {
      lat : parseFloat(latitude),
      lng : parseFloat(longitude)
  };

  document.getElementById('longitude').innerHTML = track.lng;
  document.getElementById('latitude').innerHTML = track.lat;

var latlng = new google.maps.LatLng(track.lat, track.lng);
marker.setPosition(latlng);

console.log(track);
}, 2000);
}