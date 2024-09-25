import { osm_street, osm_topo, esri_satelite } from "./layers/maps.js";
import { regions } from "./layers/regions.js";
import { holly } from "./layers/holly.js";
 import { rivers } from "./layers/rivers.js";

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
  zoom: 8,
  maxZoom: 10,
  minZoom: 8,
  // maxBounds: mybounds,
  layers: [osm_street, regions],
});

var mainlayer = {
  "Open Street Map": osm_street,
  "Open Topo Maps": osm_topo,
  "Esri Satelite": esri_satelite,
};

map.on("zoom", function () {
  console.log(map.getZoom());
});

map.on("zoomend", function () {
  let z = map.getZoom();
  if (z == 8) {
    return regions.addTo(map);
  } else {
    regions.remove();
  }
});

map.on("zoomend", function () {
  let z = map.getZoom();
  if (z == 9) {
    return rivers.addTo(map);
  } else {
    rivers.remove();
  }
});

map.on("zoomend", function () {
  let z = map.getZoom();
  if (z == 10) {
    return holly.addTo(map);
  } else {
    holly.remove();
  }
});

L.control
  .layers(mainlayer, {
    // position: "topright",
  })
  .addTo(map);
