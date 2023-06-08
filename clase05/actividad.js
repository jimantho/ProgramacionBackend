const fs = require("fs")
const { json } = require("stream/consumers")
// 1RA FORMA
/* fs.writeFile('./fechayhora.txt', Date(), "utf-8", (err) => {
    if (err) {
        return console.log(err)
    }
    console.log("archivo creado")
    fs.writeFile('')

})
fs.readFile('./fechayhora.txt', "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log("LA Fecha y hora es:", data)
    }
}) */

// 2DA FORMA
/* const fecha = new Date().toLocaleDateString()
fs.writeFile('./fechayhora.txt', '', "utf-8", (err) => {
    if (err) return console.log(err)
    console.log("archivo creado")
    fs.readFile('fechayhora.txt', 'utf-8',(err,data)=>{
        if(err) return console.log(err)
        console.log(data)
    })

})
 */

// PROMESAS================================================================

// const {promise: fs} = require('fs') /*  de otra forma*/

// 1forma
/* fs.promises.writeFile('./data2',"esto es un ejemplo",'utf-8')
.then(()=>console.log("termino de escribir"))
.catch(err => console.log(err)) */

// 2da forma

const manejoArchivo = async () => {

    // escribir un archivo
    /* try{
        await fs.promises.writeFile('./data2',"estooo es un ejemplo",'utf-8')
        console.log("termino de escribir")
    } catch(error){
        console.log(error)
    }
    } */

    // leer un archivo

    /* try {
        let data = await fs.promises.readFile('./data2', 'utf-8',)
        console.log(data)
    } catch (error) {
        console.log(error)
    } */

    // agregar al archivo
    /* try {
        let data = await fs.promises.appendFile('./data2', " \n esto es un agregagoooo",'utf-8',)
        console.log("data agregada")
    } catch (error) {
        console.log(error)
    }  */

    // eliminar archivo
   /*  try {
        let data = await fs.promises.unlink('./data2')
        console.log("archivo borrado")
    } catch (error) {
        console.log(error)
    }  */


    // leyendo archivo json
    try {
        let data = await fs.promises.readFile('package.json', 'utf-8',)
        let dataJs = JSON.parse(data)
        dataJs.author ="ANYELA"
        console.log(dataJs)
        await fs.promises.writeFile('./data.txt',JSON.stringify(dataJs), 'utf-8')
        console.log("termino de escribir")
    } catch (error) {
        console.log(error)
    } 
}


manejoArchivo()


class Clase{
    constructor(ruta){
        this.path = ruta
    }
}

new Clase("./")