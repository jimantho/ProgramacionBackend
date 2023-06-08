const express = require('express')
// para hacer con import tienes que colocar type : module 
// import express, { request, response } from 'express'
const usersRouter = require('./routes/users.router.js')
const productosRouter = require('./routes/productos.router.js')
// const productosRouter3 = require('./public')

const cookie = require('cookie-parser')
const { uploader } = require('./utils.js')


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(__dirname)

app.use('/virtual', express.static(__dirname + '/public'))

//mid de terceros
app.use(cookie())

app.use((req, res, next) => {
    console.log('Time', Date())
    next()
})

function mid1(req, res, next) {
    req.dato1 = "dato uno"
    next()
}
function mid2(req, res, next) {
    req.dato2 = "dato 2"
    next()
}

/* app.get('/', (request, response) => {
    response.send(usuarios)
}) */
// http://localhost:8080/api/users
/* app.get("/api/users", (request, response) => {
    response.status(200).send(usuarios)
}) */
//Usuarios
// http://localhost:8080/api/users
app.use("/api/users", mid1, usersRouter)
//Productos
// http://localhost:8080/api/productos
app.use("/api/productos", mid2, mid1, productosRouter)


// http://localhost:8080/query
/* app.get('/query', (req, res) => {

    console.log(req.query)
    const { genero } = req.query
    //Consulta para cuando genero no esta definido o distinto a F y M
    if (!genero || (genero !== 'M' && genero !== 'F')) {
        return res.send(usuarios)
    }
    let usuariosFiltrados = usuarios.filter(usuario => usuario.gender === genero)
    res.send({
        usuariosFiltrados
    })

})

// http://localhost:8080/query
app.post("/query", (req, res) => {
    res.send("soy posT de /query")
})
 */

app.use('/single',uploader.single('myfile') ,(req, res) => {
    res.status(200).json(
        { mensaje: "se ha subido con exito" }
    )
})

//manejo de errores
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Todo mal")
})

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`)
    console.log("hola desde server")
})

