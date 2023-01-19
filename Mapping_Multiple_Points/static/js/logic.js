console.log("working");

//let map = L.map('mapid').setView([40.8,-94.5], 4);
var map = L.map("mapid", {
    center: [
        40.8, -94.5
    ],
    zoom: 4
});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/dark-v10",
  accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


//L.circleMarker([34.0522, -118.2437], {
//    radius: 300,
//    color:"black",
//   fillColor:"yellow",
//    opacity:0.5
//}).addTo(map);

let cityData = cities;

cityData.forEach(function(city) {
    console.log(city)
    L.circle(city.location, {
        radius: (city.population-200000)/50,
        color:"orange",
        fillColor:"orange",
        lineWeight:4
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</h3>")
    .addTo(map);
});