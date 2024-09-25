import rivers_geojson from "../geojson/rivers.js";

let styles = {
  weight: 3,
  opacity: 1,
  color: "blue",
  dashArray: "10, 8",
  fillOpacity: 0.2,
  smoothFactor: 2,
  offset: 3,
};

export let rivers = L.geoJson([rivers_geojson], {
  style: function (feature) {
    switch (true) {
      case feature.properties.len >= 40:
        return {
          color: "red",
          weight: 3,
          opacity: 1,
          color: "red",
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };

      case feature.properties.len < 40:
        return {
          color: "blue",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
    }
  },
});

// rivers.eachLayer(function (layer) {
//   layer.bindPopup("layer.feature.properties.name");
// });

rivers.eachLayer(function (layer) {
  layer.bindTooltip(layer.feature.properties.name);
});
