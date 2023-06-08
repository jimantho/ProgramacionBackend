const fs = require("fs")
// console.log(fs)
// fs sincronico________________________________________________________________
// fs.writeFileSync('./data.txt',"esto es un ejemplo",'utf-8')
// console.log(fs.existsSync('./data')) 
// const archivo = fs.readFileSync('./data.txt', 'utf-8')
// console.log(archivo)

// fs.appendFileSync('./data.txt', ' \n esto es un agregando', 'utf-8')
// fs.unlinkSync('./data.txt')


// CALLBACK
/* fs.writeFile('./clase05/data.txt', 'esto es un ejemplo', 'utf-8', (err) => {
    if (!err) {
        console.log("archivo creado")
    } else {
        console.log(err)
    }
}) */
/* fs.appendFile('./clase05/data.txt', 'esto es un agregado', 'utf-8', (err)=>{
if(err){
    console.log(err)
}else{
    console.log("Texto agregado")
}}) */

/* fs.readFile("./data.txt", 'utf-8', (err,data)=>{
    if(err){
        console.log(err)
    }else{
        // contenido = data
        console.log('read',data)
    }

}) */


// unlink
/* fs.unlink("./data.txt", (err)=>{
    if(err){
        console.log(err)
    }else{
        // contenido = data
        console.log('archivo eliminado')
    }

}) */

// JSON --------------------------------------------
const manejoArchivo = async () => {
    const usuarios = [
        {
            id: 1, name: "anyela", dni: 89889, email: "AA"
        }]

    let usuaiosStrngfy = JSON.stringify(usuarios) //convertir a JSON
    console.log(usuaiosStrngfy)

    let usuariosParse = JSON.parse(usuaiosStrngfy) //convertir a js
    console.log(usuariosParse)
}

manejoArchivo()
