const argv = require("yargs")
                .option("n", {
                    alias: "numero",
                    type: "number",
                    demandOption: true, // como valor requerido
                    describe: "Es el numero base con que se genera la multiplicación"
                })
                .option("l", {
                    alias: "listar",
                    type: "boolean",
                    default: false,
                    describe: "Muestra la tabla en consola"
                })
                .option("h", {
                    alias: "hasta",
                    type: "number",
                    default: 10,
                    describe: "Limite de la multiplicación"
                })
                .check( (argv, options) => {
                    //console.log("yargs", argv)
                    if (isNaN( argv.n )) {
                        throw "Debe ingregar un numero"
                    }
                    return true;
                } )
                .argv

module.exports = argv;