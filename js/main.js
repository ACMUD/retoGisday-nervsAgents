var actualCity = 'BOGOTÁ'

const setCity = (city) => {
    actualCity = city
    document.getElementById("cityName").innerHTML = actualCity
    chargeMaps()
}

$(document).ready(chargeMaps())

function chargeMaps() {
    switch (actualCity) {
        case "BOGOTÁ":
            chargeMapsBogota()
            break;
        default:
            break;
    }
}

