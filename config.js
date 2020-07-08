const API_KEY = "pk.eyJ1IjoiY2FybGFpciIsImEiOiJjazFja3JjYncwMTJlM2xteWl2czY4aWg0In0.gxpkCgiMg1Fo7voVsLNlHw";

var streets = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery Â© <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

// Demo Marker
var marker = L.marker([35.2271, -80.8431], {
	title: "This Marker is in Charlotte, NC"
});

marker.bindPopup("Hello from Charlotte, NC!");

// Section 001 Markers

var Sam_Marker = L.marker([35.6762, 139.6503], {
	title: "Sam Bailey wants to travel to Tokyo, Japan"
});

Sam_Marker.bindPopup("Sam says Konichiwa from Tokyo!");

var Jonathan_Marker = L.marker([30.0444, 31.2357], {
	title: "Jonathan Lindsay wants to travel to Egypt"
});

Jonathan_Marker.bindPopup("Jonathan says Hello from Egypt!");

var Semira_Marker = L.marker([7.5400, -5.5471], {
	title: "Semira Daniels wants to travel to Côte d'Ivoire"
});

Semira_Marker.bindPopup("Semira says Hello from Côte d'Ivoire!");

var Camryn_Marker = L.marker([13.9094, -60.9789], {
	title: "Camryn wants to travel to St. Lucia"
});

Camryn_Marker.bindPopup("Camryn says Hello from St. Lucia!");

// Section 002 Markers


var myMap = L.map("map", {
	center: [0, 0],
	zoom: 3});
	
streets.addTo(myMap);
marker.addTo(myMap);
Sam_Marker.addTo(myMap);
Jonathan_Marker.addTo(myMap);
Semira_Marker.addTo(myMap);
Camryn_Marker.addTo(myMap);
