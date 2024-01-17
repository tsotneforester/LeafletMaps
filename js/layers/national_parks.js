import {algeti_geojson, mtirala_geojson, javakheti_geojson, fshavi_geojson, machakhela_geojson, tbilisi_geojson, kintrishi_geojson, kazbegi_geojson, vashlovani_geojson, tusheti_geojson, erusheti_geojson, kolkheti_geojson, borjomi_geojson } from "../geojson/national_parks.js";


const algeti = L.geoJson(algeti_geojson);
const mtirala = L.geoJson(mtirala_geojson);
const javakheti = L.geoJson(javakheti_geojson);
const fshavi = L.geoJson(fshavi_geojson);
const machakhela = L.geoJson(machakhela_geojson);
const tbilisi = L.geoJson(tbilisi_geojson);
const kintrishi = L.geoJson(kintrishi_geojson);
const kazbegi = L.geoJson(kazbegi_geojson);
const vashlovani = L.geoJson(vashlovani_geojson);
const tusheti = L.geoJson(tusheti_geojson);
const erusheti = L.geoJson(erusheti_geojson);
const kolkheti = L.geoJson(kolkheti_geojson);
const borjomi = L.geoJson(borjomi_geojson);

export const national_parks = L.layerGroup([algeti, mtirala, javakheti, fshavi, machakhela, tbilisi, kintrishi, kazbegi, vashlovani, tusheti, erusheti, kolkheti, borjomi], {
  // minZoom: 7,
  maxZoom: 8,
});

// default, mouseover and  mouseout 
national_parks.eachLayer(function (layer) {
  layer.setStyle({
    weight: 2,
    opacity: 1,
    color: "black",
    // dashArray: '12, 5, 1, 5, 1, 5',
    fillOpacity: 0.2,
  });
});

national_parks.eachLayer(function (layer) {
  layer.on("mouseover", function (e) {
    e.target.setStyle({
      color: "blue",
      weight: 4,
    });
  });
});

national_parks.eachLayer(function (layer) {
  layer.on("mouseout", function (e) {
    e.target.setStyle({
      weight: 2,
      opacity: 1,
      color: "black",
      // dashArray: '12, 5, 1, 5, 1, 5',
      fillOpacity: 0.2,
    });
  });
});

const red = L.layerGroup([borjomi]);

// default, mouseover and  mouseout 
red.eachLayer(function (layer) {
  layer.setStyle({
    weight: 2,
    opacity: 1,
    color: "red",
    // dashArray: '12, 5, 1, 5, 1, 5',
    fillOpacity: 0.2,
  });
});



red.eachLayer(function (layer) {
  layer.on("mouseout", function (e) {
    e.target.setStyle({
      weight: 2,
      opacity: 1,
      color: "red",
      // dashArray: '12, 5, 1, 5, 1, 5',
      fillOpacity: 0.2,
    });
  });
});


national_parks.eachLayer(function (layer) {
  layer.eachLayer(function (layer) {
    layer.bindTooltip(layer.feature.properties.description);
  });
});


