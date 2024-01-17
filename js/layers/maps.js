let osm_street = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; Tsotneforester",
  minZoom: 1,
  maxZoom: 19,
});

let osm_topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; Tsotneforester",
  minZoom: 1,
  maxZoom: 15,
});

let esri_satelite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
  attribution: "&copy; Tsotneforester",
  minZoom: 9,
  maxZoom: 17,
});

export { osm_street, osm_topo, esri_satelite };
