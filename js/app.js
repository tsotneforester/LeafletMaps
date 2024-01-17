import { osm_street, osm_topo, esri_satelite } from "./layers/maps.js";
import { regions } from "./layers/regions.js";
import { national_parks } from "./layers/national_parks.js";
import { holy } from "./layers/holy.js";

let map = L.map("mapid", {
  // drawControl: true,
  // dragging: false,
  // touchZoom: false,
  // scrollWheelZoom: false,
  // doubleClickZoom: false,
  // boxZoom: false,
  // tap: false,
  // keyboard: false,
  // zoomControl: false,
  // attributionControl: false,
  // prefix: false
  renderer: L.canvas(),
  zoomControl: true,
  fullscreenControl: true,
  center: [42.2955, 43.69],
  zoom: 7,
  maxZoom: 9,
  minZoom: 7,
  // maxBounds: mybounds,
  layers: [osm_street, regions],
});

var mainlayer = {
  "Open Street Map": osm_street,
  "Open Topo Maps": osm_topo,
  "Esri Satelite": esri_satelite,
};

map.on("zoomend", function () {
  let z = map.getZoom();
  if (z > 8) {
    return national_parks.remove();
  } else if (z < 8) {
    return national_parks.remove();
  } else {
    national_parks.addTo(map);
  }
});

map.on("zoomend", function () {
  let z = map.getZoom();
  if (z < 8) {
    return regions.addTo(map);
  } else {
    regions.remove();
  }
});

map.on("zoomend", function () {
  let z = map.getZoom();
  if (z > 9) {
    return holy.remove();
  } else if (z < 9) {
    return holy.remove();
  } else {
    holy.addTo(map);
  }
});

L.control
  .layers(mainlayer, {
    // position: "topright",
  })
  .addTo(map);
