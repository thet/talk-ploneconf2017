/* global L */
(function (L) {
  "use strict";

  var map, markers, marker, geopoints, bounds, i, size;

  map = L.map('map').setView([51.505, -0.09], 13);
  L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 7,
    ext: 'png'
  }).addTo(map);

  markers = new L.MarkerClusterGroup({zoomToBoundsOnClick: true, spiderfyOnMaxZoom: true, maxClusterRadius: 1});  // 40
  geopoints = [
    {
      'title': 'programmatic',
      'lat': 47.200,
      'lng': 15.300,
      'popup': '<a href="http://programmatic.pro/"><img src="./imgs/programmatic-logo-200.png" style="width: 200px; height: 19px;"></a>'
    },
    {
      'title': 'Klein & Partner KG',
      'lat': 47.2646958,
      'lng': 11.439872100000002,
      'popup': '<a href="http://kleinundpartner.at/"><img src="./imgs/kuplogostandardfallback.png" style="width: 150px; height: 51px;"></a>'
    },
    {
      'title': 'The Schubidu Quartett',
      'lat': 47.0676916,
      'lng': 15.53,
      'popup': '<a href="http://www.schubiduquartet.com/"><img src="./imgs/Logo_TheSchubiduQuartet_150x150.png" style="width: 150px; height: 150px;"></a>'
    },
    {
      'title': 'agitator',
      'lat': 47.3894227,
      'lng': 8.518808000000035,
      'popup': '<a href="http://www.agitator.com/"><img src="./imgs/agitator-logo.jpg" style="width: 101px; height: 29px;"></a>'
    },
    {
      'title': 'cloud19',
      'lat': 48.2275409,
      'lng': 15.33085559999995,
      'popup': '<a href="http://cloud19.at/"><img src="./imgs/cloud19-logo.png" style="width: 150px; height: 87px;"></a>'
    },
  ];
  for(i = 0; i < geopoints.length ; i = i+1){
    marker = new L.Marker([geopoints[i].lat, geopoints[i].lng])
      .bindPopup(geopoints[i].popup);
    markers.addLayer(marker);
  }
  map.addLayer(markers);
  bounds = markers.getBounds();
  map.fitBounds(bounds);
  map.setZoom(4);
  window.map = map;
}) (L);
