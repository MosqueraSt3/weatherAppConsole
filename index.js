const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")
const Busquedas = require('./models/busquedas')

const main = async () => {

    const busquedas = new Busquedas()
    let opt
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                // Mostrar Mensaje
                const lugar = await leerInput('Ciudad:')
                console.log(lugar)

                // Buscar Lugares


                console.log(`\nInformacion de la ciudad\n`.green)
                console.log(`ciudad:`)
                console.log(`Lat:`)
                console.log(`Lng:`)
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