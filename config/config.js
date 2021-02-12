require('dotenv').config()

const config = {
    mapboxKey: process.env.MAPBOX_KEY,
    openweatherKey: process.env.OPENWEATHER_KEY
}

module.exports = { config }