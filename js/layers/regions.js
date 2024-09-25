import regions_geojson from "../geojson/regions.js";



let styledRegions = L.geoJson(regions_geojson, {
  style: function (feature) {
    switch (feature.properties.name_en) {
      case "Abkhazia":
        return {
          color: "red",
          weight: 3,
          opacity: 1,
          color: "red",
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Ajaria":
        return {
          color: "brown",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Guria":
        return {
          color: "CadetBlue",
          weight: 3,
          opacity: 1,
          color: "red",
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Imereti":
        return {
          color: "black",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Samegrelo-Zemo Svaneti":
        return {
          color: "DarkOrange",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Kakheti":
        return {
          color: "DeepSkyBlue",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Kvemo Kartli":
        return {
          color: "LawnGreen",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Mtskheta-Mtianeti":
        return {
          color: "MediumSpringGreen",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Racha-Lechkhumi":
        return {
          color: "Maroon",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Samegrelo-Zemo Svaneti":
        return {
          color: "LemonChiffon",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Samtskhe-Javakheti":
        return {
          color: "OliveDrab",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Shida Kartli":
        return {
          color: "SlateBlue",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
      case "Tbilisi":
        return {
          color: "OrangeRed",
          weight: 3,
          opacity: 1,
          dashArray: "6, 10, 6, ",
          fillOpacity: 0.3,
        };
    }
  },
});

styledRegions.eachLayer(function (layer) {
  layer.bindTooltip(layer.feature.properties.name_ka);
});

export let regions = L.layerGroup([styledRegions]);
