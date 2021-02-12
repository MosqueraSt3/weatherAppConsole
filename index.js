const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer")
const Busquedas = require('./models/busquedas')

const main = async () => {

    const busquedas = new Busquedas()
    let opt
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                // Mostrar Mensaje
                const termino = await leerInput('Ciudad:')

                // Buscar Lugares
                const lugares = await busquedas.ciudad( termino )

                //Seleccionar el lugar 
                const id = await listarLugares( lugares )
                const lugarSel = lugares.find( l => l.id === id )
                console.log({ id })


                console.log(`\nInformacion de la ciudad\n`.green)
                console.log(`ciudad: ${lugarSel.nombre}`)
                console.log(`Lat: ${lugarSel.lat}`)
                console.log(`Lng: ${lugarSel.lng}`)
                console.log(`Temperatura:`)
                console.log(`Minima:`)
                console.log(`Maxima:`)
                break;
            case 2:
                console.log(`historial ${opt}`)
                break;
        }

        if ( opt !== 0 ) await pausa()
    } while ( opt !== 0 );
}

main()