// para correr hht necesitamo colocar en type = ""
/* const http = require('http')

const server = http.createServer((peticion, respuesta) => {
    console.log(peticion)
    respuesta.end('Hola a la primera app server')
})
server.listen(8080, err => {
    console.log('escuchando en el puerto 8080')
    console.log("hola desde index http")
})

 */
import fs from "fs"
import express from 'express'
import { resolve } from "path"

const app = express()
const PORT = 8080
//midleware para analizar datos del formulario
app.use(express.urlencoded({ extended: true }))

//leer archivo
let ruta = "./productos.json"
let productosJson
const getProductos = async () => {
    try {
        if (fs.existsSync(ruta)) {
            let dataProductosJson = await fs.promises.readFile(ruta, "utf-8")
            productosJson = JSON.parse(dataProductosJson)
            return productosJson

        }
        await fs.promises.writeFile(ruta, '[]', 'utf-8')
        return []

    } catch (error) {
        console.log("imprimiendo error: ", error)
    }
}

getProductos()

app.get("/", (request, response) => {
    response.send(productosJson)
})

app.get("/query", (req, res) => {
    const { limit } = req.query // const {limit: limit} = {limit: 5}
    console.log(req.query)
    let nuevaLista = productosJson.slice(0, limit)
    console.log(nuevaLista)
    res.send(nuevaLista)
})

app.get("/params/:pid", (req, res) => {
    const { pid } = req.params
    console.log(req.params)
    let productoId = productosJson.find(producto => producto.id === parseInt(pid))
    res.send(productoId)
})

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("Escuando en el puerto: ", PORT)
    console.log("Hola desde server")
})


