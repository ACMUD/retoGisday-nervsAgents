var actualCity = 'BOGOTÁ'
var layers = {
    showRedMatriz: false,
    showPlantaTratamiento: false,
    showConduccion: false,
    showCamaraAcceso: false,
    showEstacionBombeo: false,
    showHidrante: false,
    showValvulaControl: false,
    showRedMenor: false,
    showDistrito: false,
    showSubSector: false,
    showRedTroncal: false,
    showCuencaPluvial: false,
    showSubCuencaPluvial: false,
    showRedTroncalPluvial: false
}

const changeLayerState = (layer) => {
    layers[layer] = !layers[layer]
    start()
}

$(document).ready(start())

function start() {
    chargeMap(
        layers.showRedMatriz,
        layers.showPlantaTratamiento,
        layers.showConduccion,
        layers.showCamaraAcceso,
        layers.showEstacionBombeo,
        layers.showHidrante,
        layers.showValvulaControl,
        layers.showRedMenor,
        layers.showDistrito,
        layers.showSubSector,
        layers.showRedTroncal,
        layers.showCuencaPluvial,
        layers.showSubCuencaPluvial,
        layers.showRedTroncalPluvial
    )
}
