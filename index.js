const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer")
const Busquedas = require('./models/busquedas')

const main = async () => {

    const busquedas = new Busquedas()
    let opt
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                try {
                    // Mostrar Mensaje
                    const termino = await leerInput('Ciudad:')
    
                    // Buscar Lugares
                    const lugares = await busquedas.ciudad( termino )
    
                    //Seleccionar el lugar 
                    const id = await listarLugares( lugares )
                    const { nombre,lat,lng } = lugares.find( l => l.id === id )
    
                    // Traigo el clima de ese lugar
                    const { desc, min, max, temp } = await busquedas.climaLugar(lat,lng)

                    // Muestro el resultado
                    console.clear()
                    console.log(`\nInformacion de la ciudad\n`.green)
                    console.log(`ciudad: ${nombre}`)
                    console.log(`Lat: ${lat}`)
                    console.log(`Lng: ${lng}`)
                    console.log(`Pronostico: ${desc}`)
                    console.log(`Temperatura: ${temp}`)
                    console.log(`Minima: ${min}`)
                    console.log(`Maxima: ${max}`)
                    
                } catch (error) {
                    console.error('Algo sucedio mal'.red)
                }
                break;
            case 2:
                console.log(`historial ${opt}`)
                break;
        }

        if ( opt !== 0 ) await pausa()
    } while ( opt !== 0 );
}

main()