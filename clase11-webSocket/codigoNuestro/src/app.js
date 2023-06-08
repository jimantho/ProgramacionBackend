const express = require('express')
const usersRouter = require('./routes/users.router.js')
const productosRouter = require('./routes/productos.router.js')
const viewsRouter = require('./routes/views.routers.js')

const cookie = require('cookie-parser')
const { uploader } = require('../src/utils/multerConfig.js')
//handlebars
const handlebars = require('express-handlebars')
//socket.io
const {Server, Socket} = require('socket.io')

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

const httpServer = app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${httpServer.address().port}`)
    console.log("hola desde server")
})

const socketServer = new Server(httpServer)
socketServer.on('connection',socket =>{
    console.log("Nuevo cliente conectado")
    socket.on('mensaje', data =>{
        console.log(data)
    })
    socket.emit('mensajeServer', 'Listo estoy escuchandote!')
    socket.broadcast.emit('evento_para_todos_menos_actual','Esto lo van recibiendo')
    socketServer.emit('evento_para_todos',"algun tipo de mensaje")
    
    socket.on('disconnect',()=>{
        console.log("Disconnect")
    })

})

// httpServer.on('error', err =>
// console.log(err))

