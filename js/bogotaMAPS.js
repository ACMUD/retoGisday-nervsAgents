function chargeMapsBogota() {
    require([
        "esri/Map",
        "esri/views/MapView",

        "esri/layers/FeatureLayer",
        "esri/layers/TileLayer",

        "esri/widgets/Legend",
        "esri/widgets/Expand"
    ], function (Map, MapView, FeatureLayer, TileLayer, Legend, Expand) {
        // Matriz
        var redMatriz = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/15"
        });

        // Planta de Tratamniento
        var treatmentPlant = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/4"
        });

        const basemapFirefly = new TileLayer({
            url: ""
        });

        treatmentPlant.renderer = {
            type: "simple",
            symbol: {
                type: "picture-marker",
                url: "../images/planta.png",
                width: 50,
                height: 50
            }
        };

        var map = new Map({
            basemap: "hybrid",
            layers: [basemapFirefly, redMatriz, treatmentPlant]
        });

        var mapView = new MapView({
            container: "mapView1",
            map: map,
            center: [-74.13, 4.65],
            scale: 100000
        });

        const legend = new Expand({
            content: new Legend({
                view: mapView,
                style: "card",
                layerInfos: [{
                    title: "Plantas de Generación",
                    layer: generationPlants
                }]
            }),
            view: mapView
        });

        mapView.ui.add(legend, "bottom-right");
    });
}