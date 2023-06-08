const escribirArchivo = require('./escrArch.js')

console.log("inicio del programa")

escribirArchivo("hola mundo",()=>{
    console.log("terminé de escribir el archivo")
})

console.log("fin del programa")
