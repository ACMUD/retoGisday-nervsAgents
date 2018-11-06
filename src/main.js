require([
    "esri/Map",
    "esri/views/MapView"
], function(Map, MapView) {
    var map = new Map ({
        basemap: "topo"
    });

    var mapView = new MapView ({
        container: "mainMap",
        map: map
    });
});