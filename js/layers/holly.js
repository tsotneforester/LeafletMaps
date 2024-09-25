import holly_geojson from "../geojson/holly.js";

let styles = {
  radius: 4,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

var cyanCastle = L.icon({
  iconUrl: "https://gpx.ge/root/img/leaflet/cyancastle.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [-0, -18],
});

var blackRuins = L.icon({
  iconUrl: "https://gpx.ge/root/img/leaflet/blackruins.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [-0, -18],
});

var cyanMonastery = L.icon({
  iconUrl: "https://gpx.ge/root/img/leaflet/cyanmonastery.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [-0, -18],
});

var cyanChurch = L.icon({
  iconUrl: "https://gpx.ge/root/img/leaflet/cyanchurch.png",
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [-0, -18],
});

//L.circleMarker(latlng, styles)
let geojsonLayer = L.geoJSON(holly_geojson, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.description !== null) {
      switch (feature.properties.category) {
        case "church":
          return L.marker(latlng, { icon: cyanChurch });
        case "ruins":
          return L.marker(latlng, { icon: blackRuins });
        case "castle":
          return L.circleMarker(latlng, { ...styles, color: "#0000FF", fillColor: "#0000FF" });
        case "monastery":
          return L.marker(latlng, { icon: cyanMonastery });
        default:
          return L.circleMarker(latlng, { ...styles, color: "#ff0000", fillColor: "#ff0000" });
      }
    }
  },

  onEachFeature: function (feature, layer) {
    return layer.bindPopup(feature.properties.description);
  },
});

geojsonLayer.eachLayer(function (layer) {
  layer.bindTooltip(layer.feature.properties.name);
});

export let holly = L.layerGroup([geojsonLayer]);
