function chargeMap(showRedMatriz, showPlantaTratamiento, showConduccion, showCamaraAcceso, showEstacionBombeo, showHidrante, showValvulaControl, showRedMenor, showDistrito, showSubSector, showRedTroncal, showCuencaPluvial, showSubCuencaPluvial, showRedTroncalPluvial) {
    require([
        "esri/Map",
        "esri/views/MapView",

        "esri/layers/FeatureLayer",

        "esri/widgets/Legend",
        "esri/widgets/Expand"
    ], function (Map, MapView, FeatureLayer, Legend, Expand) {

        //Red principal de alcantarillado
        var redMatriz = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/15",
            visible: showRedMatriz
        });

        //Plantas de tratamiento
        var plantaTratamiento = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/4",
            visible: showPlantaTratamiento
        });

        plantaTratamiento.renderer = {
            type: "simple",
            symbol: {
                type: "picture-marker",
                url: "../images/planta.png",
                width: 50,
                height: 50
            }
        };

        //Red de alcantarillado fronteriza
        var conduccion = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/1",
            visible: showConduccion
        });

        //Camaras de conexión de redes
        var camaraAcceso = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/2",
            visible: showCamaraAcceso
        });

        //Bombeo de Aguas
        var estacionBombeo = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/3",
            visible: showEstacionBombeo,
        });

        //Estaciones 
        var hidrante = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/7",
            // datos url: "http://www.arcgis.com/home/item.html?id=1027ce2fc6a3431a86e76c3dbd575c2f#data"
            visible: showHidrante
        });

        var valvulaControl = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/11",
            visible: showValvulaControl
        });

        var redMenor = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/14",
            visible: showRedMenor
        });

        var distrito = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/17",
            visible: showDistrito
        });

        var subSector = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/18",
            visible: showSubSector
        });

        var redTroncal = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoSanitario/MapServer/9",
            visible: showRedTroncal
        });

        var cuencaPluvial = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoPluvial/MapServer/13",
            visible: showCuencaPluvial
        });

        var subCuencaPluvial = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoPluvial/MapServer/12",
            visible: showSubCuencaPluvial
        });

        var redTroncalPluvial = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoPluvial/MapServer/9",
            visible: showRedTroncalPluvial
        });

        var map = new Map({
            basemap: "hybrid",
            layers: [redMatriz, conduccion, camaraAcceso, estacionBombeo, plantaTratamiento, hidrante, valvulaControl, redMenor, redMatriz, distrito, redTroncal, subSector, cuencaPluvial, subCuencaPluvial, redTroncalPluvial]
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
                layerInfos: [
                    {
                        title: "Red de Alcantarillado",
                        layer: redMatriz
                    }
                ]
            }),
            view: mapView
        });

        mapView.ui.add(legend, "bottom-right");
    });
}