function chargeMap(showRedMatriz, showPlantaTratamiento, showConduccion, showCamaraAcceso, showEstacionBombeo, showHidrante, showValvulaControl, showRedMenor, showDistrito, showSubSector, showRedTroncal, showCuencaPluvial, showSubCuencaPluvial, showRedTroncalPluvial) {
    require([
        "esri/Map",
        "esri/views/MapView",

        "esri/layers/FeatureLayer",

        "esri/widgets/Legend",
        "esri/widgets/Expand"
    ], function (Map, MapView, FeatureLayer, Legend, Expand) {

        //Red principal de alcantarillado
        let redMatriz = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/15",
            visible: showRedMatriz
        });

        //Plantas de tratamiento
        let plantaTratamiento = new FeatureLayer({
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
        let conduccion = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/1",
            visible: showConduccion
        });

        //Camaras de conexión de redes
        let camaraAcceso = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/2",
            visible: showCamaraAcceso
        });

        //Bombeo de Aguas
        let estacionBombeo = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/3",
            visible: showEstacionBombeo,
        });

        //Estaciones 
        let hidrante = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/7",
            // datos url: "http://www.arcgis.com/home/item.html?id=1027ce2fc6a3431a86e76c3dbd575c2f#data"
            visible: showHidrante
        });

        let valvulaControl = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/11",
            visible: showValvulaControl
        });

        let redMenor = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/14",
            visible: showRedMenor
        });

        let distrito = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/17",
            visible: showDistrito
        });

        let subSector = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/RedAcueducto2018/MapServer/18",
            visible: showSubSector
        });

        let redTroncal = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoSanitario/MapServer/9",
            visible: showRedTroncal
        });

        let cuencaPluvial = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoPluvial/MapServer/13",
            visible: showCuencaPluvial
        });

        let subCuencaPluvial = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoPluvial/MapServer/12",
            visible: showSubCuencaPluvial
        });

        let redTroncalPluvial = new FeatureLayer({
            url: "https://www.acueducto.com.co/wassigue/arcgis/rest/services/AlcantarilladoPluvial/MapServer/9",
            visible: showRedTroncalPluvial
        });

        let map = new Map({
            basemap: "hybrid",
            layers: [redMatriz, conduccion, camaraAcceso, estacionBombeo, plantaTratamiento, hidrante, valvulaControl, redMenor, redMatriz, distrito, redTroncal, subSector, cuencaPluvial, subCuencaPluvial, redTroncalPluvial]
        });

        let mapView = new MapView({
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
                        title: "redMatriz",
                        layer: redMatriz
                    },
                    {
                        title: "conduccion",
                        layer: conduccion
                    },
                    {
                        title: "camaraAcceso",
                        layer: camaraAcceso
                    },
                    {
                        title: "estacionBombeo",
                        layer: estacionBombeo
                    },
                    {
                        title: "plantaTratamiento",
                        layer: plantaTratamiento
                    },
                    {
                        title: "hidrante",
                        layer: hidrante
                    },
                    {
                        title: "valvulaControl",
                        layer: valvulaControl
                    },
                    {
                        title: "redMenor",
                        layer: redMenor
                    },
                    {
                        title: "redMatriz",
                        layer: redMatriz
                    },
                    {
                        title: "distrito",
                        layer: distrito
                    },
                    {
                        title: "redTroncal",
                        layer: redTroncal
                    },
                    {
                        title: "subSector",
                        layer: subSector
                    },
                    {
                        title: "cuencaPluvial",
                        layer: cuencaPluvial
                    },
                    {
                        title: "subCuencaPluvial",
                        layer: subCuencaPluvial
                    },
                    {
                        title: "redTroncalPluvial",
                        layer: redTroncalPluvial
                    }
                ]
            }),
            view: mapView
        });

        mapView.ui.add(legend, "bottom-right");
    });
}