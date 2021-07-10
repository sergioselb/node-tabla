const fs = require('fs'); // es como cuando se exporta una libreria o hook en react pero de node

const crearArchivo = async(numero = 5, listar = false, hasta = 10) => { // se transformo en un funcion asincrona

  try {
    if (listar) {
      console.log("====================".green);
      //console.log(`|   Tabla del: ${numero}   |`);
      console.log("|   Tabla del:", numero, "  |");
      console.log("====================".green);
    }
  
    let resultado = ""
    let consola = ""

  
    for( let i = 1; i <= hasta; i++){
      let multiplicacion = numero * i
      resultado += `${numero} x ${i} = ${multiplicacion}\n`;
      consola += `${numero} ${"x".blue} ${i} ${"=".blue} ${multiplicacion}\n`;
    }
    
    if (listar) {
      console.log(consola)
    }
  
    fs.writeFileSync( `./salida/tabla-${numero}.txt`, resultado);
  
    return `tabla-${ numero }.txt`;

  } catch (err) {
      throw err;
  }


  //console.log(`tabla-${numero}.txt creado!!`); antes deq fuera async

}

module.exports = { // esta es la manera que node exporta un objeto, funcion o un archivo.
  //crearArchivo: crearArchivo
  crearArchivo
}