const express = require('express')
const usersRouter = require('./routes/users.router.js')
const productosRouter = require('./routes/productos.router.js')
const viewsRouter = require('./routes/views.routers.js')

const cookie = require('cookie-parser')
const { uploader } = require('./utils.js')
const handlebars = require('express-handlebars')


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log(__dirname)

app.use('/virtual', express.static(__dirname + '/public'))

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set('view engine', "handlebars")

/* const fakeapi = [
    { name: "pina" , precio: 20 }, 
    { name: "pina", precio: 20 }, 
    {name: "pina", precio: 20}, 
    {name: "pina", precio: 20 }
] */
/* app.get("/", (req, res) => {
    const randomIndex = Math.floor(Math.random() * usuario.length)
    const context = {
        name: usuario[randomIndex].nombre,
        tittle: "Soy el mejor"
    }
    res.render('index', context)
})
 */
app.use("/", viewsRouter)


app.use("/api/users", usersRouter)
// http://localhost:8080/api/productos
app.use("/api/productos", productosRouter)

app.use('/single', uploader.single('myfile'), (req, res) => {
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

