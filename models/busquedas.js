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

    get paramsOpenWeather(){
        return {
            'appid': config.openweatherKey,
            'units': 'metric',
            'lang': 'es'
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

    async climaLugar( lat,lon ){
        try {
             // request http
             const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsOpenWeather, lat, lon}
            })
            const res = await instance.get()
            const { weather, main } = res.data 

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (err) {
            return []
        }
    }
}

module.exports = Busquedas