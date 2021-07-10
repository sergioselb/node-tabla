const { crearArchivo } = require("./helpers/multiplicar");// en vez de import se utiliza una const
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();



//console.log(process.argv);
//console.log(argv);
console.log("argv:", "n",argv.numero,"|", "h",argv.h);


// todo esto con fines educativos de los argumentos variable banderas que se le pueden mandar a los comandos de consola en node, pero ya existen un paquete (YARGS) que nos resuelve todo esto mejor.
/* const [ , , arg3 = "numero=5"] = process.argv;
const [, numero = 5] = arg3.split("=") */;
//console.log(numero);

crearArchivo ( argv.n, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, "creado".green))
    .catch( err => console.log(err));
