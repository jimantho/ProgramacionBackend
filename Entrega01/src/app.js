const fs = require("fs")
const express = require('express')
const productosRouter = require("./router/productos.router")
const cartsRouter = require("./router/carritos.router")

const app = express()
const PORT = 8080

app.use(express.json())
//midleware para analizar datos del formulario
app.use(express.urlencoded({ extended: true }))

app.use("/api/products", productosRouter)
app.use("/api/carts",cartsRouter)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).send("Todo mal")
})

app.listen(PORT, err => {
    if (err) console.log(err)
    console.log("Escuando en el puerto: ", PORT)
    console.log("Hola desde server")
})


