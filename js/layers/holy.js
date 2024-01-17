import holy_geojson from "../geojson/holy.json" assert { type: "json" };
//fully compatible with QGIS jeojson

let styles = {
  radius: 4,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

var geojsonLayer = L.geoJSON(holy_geojson, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.description !== null) {
      return L.circleMarker(latlng, styles);
    }
  },

  onEachFeature: function (feature, layer) {
    return layer.bindPopup(feature.properties.description);
  },
});

export let holy = L.layerGroup([geojsonLayer]);
