// Selecters 
const contentContainer = document.querySelector('.content-container')

// Leaflet map
var map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var myIcon = L.icon({
  iconUrl: 'space-station.png',
  iconSize: [35, 35],
});
let marker = L.marker([0, 0], { icon: myIcon }).addTo(map)

const fetchSpaceStation = async () => {
  const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
  const data = await res.json();
  // contents
  document.getElementById('lat').innerHTML = (data.latitude).toFixed(3);
  document.getElementById('lon').innerHTML = (data.longitude).toFixed(3);
  document.getElementById('vel').innerHTML = (data.velocity).toFixed(0);
  // Getting latitude and logitude
  let { latitude, longitude } = data
  marker.setLatLng([latitude, longitude])
};

// Live location
setInterval(fetchSpaceStation, 1000)
