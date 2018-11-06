require([
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer",
], function (Map, MapView, FeatureLayer) {

    // valvulas de control
    var controlValve = new FeatureLayer({
        url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/11"
    });

    // Planta de Tratamniento
    var treatmentPlant = new FeatureLayer({
        url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/4"
    });

    // Valvulas del Sistema
    var systemValve = new FeatureLayer({
        url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/12"
    });

    // Matriz
    var redMatriz = new FeatureLayer({
        url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/15"
    });

    var map = new Map({
        basemap: "dark-gray",
        layers: [controlValve, treatmentPlant, systemValve, redMatriz]
    });

    var mapView = new MapView({
        container: "mapView1",
        map: map,
        center: [-74.13, 4.65],
        scale: 100000
    });
});