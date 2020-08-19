const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodedUlr = encodeURI(direccion);
    axios({
            "method": "GET",
            "url": "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
                "x-rapidapi-key": "066cfd3b7bmsh76dbb0893f07ebfp1044fcjsnccec25bdd721",
                "useQueryString": true
            },
            "params": {
                "location": encodedUlr
            }
        })
        .then((resp) => {
            if (resp.data.Resuts.length === 0) {
                throw new Error(`No hay resultados para ${direccion }`)
            }

            const data = resp.data.Resuts;
            const direccion = data.name;
            const lat = data.lat;
            const lng = data.lon;

            return {
                direccion,
                lat,
                lng
            }

        })
        .catch((error) => {
            console.log(error)
        })

}

module.export = {
    getLugarLatLng
}