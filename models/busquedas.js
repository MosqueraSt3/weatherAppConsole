const axios = require('axios')
const { config } = require('../config/config')

class Busquedas{

    historial = ['Bogota', 'Cali', 'Ibagué']

    constructor(){

    }

    get paramsMapBox(){
        return {
            'access_token': config.mapboxKey,
            'limit': 5,
            'language': 'es'
        }
    }

    async ciudad( lugar = '' ){

        try {
            // request http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapBox
            })
            const res = await instance.get()
            return res.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))
        } catch (err) {
            return []
        }
    }
}

module.exports = Busquedas