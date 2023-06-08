// const express = require('express')
// para hacer con import tienes que colocar type : module 
import express, { request, response } from 'express'

const app = express()
const PORT = 8080
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let usuarios = [
    {
        id: '1',
        first_name: "Bat",
        last_name: "Phebee",
        email: "bphebee0@wired.com",
        gender: "M",
        p_address: "144.109.227.23"
    },
    {
        id: '2',
        first_name: "Bat",
        last_name: "Phebee",
        email: "bphebee0@wired.com",
        gender: "M",
        p_address: "144.109.227.23"
    },
    {
        id: '3',
        first_name: "Bat",
        last_name: "Phebee",
        email: "bphebee0@wired.com",
        gender: "F",
        p_address: "144.109.227.23"
    },
    {
        id: '4',
        first_name: "Bat",
        last_name: "Phebee",
        email: "bphebee0@wired.com",
        gender: "F",
        p_address: "144.109.227.23"
    }
]


app.get('/', (request, response) => {
    response.send(usuarios)
})
// http://localhost:8080/api/users
app.get("/api/users", (request, response) => {
    response.status(200).send(usuarios)
})
// http://localhost:8080/api/users
app.post("/api/users", (request, response) => {
    let user = request.body
    // console.log("usarios", users)
    if (!user.first_name || !user.last_name) {
        return response.status(400).send({ mensaje: "pasar los datos por favor" })
    }
    usuarios.push(user)
    console.log("usuarios", usuarios)
    response.status(201).send({ user, mensaje: "usuario agregado" })
})

// http://localhost:8080/api/users/:userId
app.put("/api/users/:userId", (request, response) => {
    const { userId } = request.params
    //Venga el id
    const index = usuarios.findIndex(user => user.id === userId)
    //exista el usuario
    if(index === -1){
        return response.status(400).send({mensaje: "No se encuentra el usuario"})
    }
    //manda el cliente request
    let user = request.body
    if (!user.first_name || !user.last_name) {
        return response.status(400).send({ mensaje: "pasar los datos por favor" })
    }
    usuarios[index] = user
    console.log(usuarios)
    response.status(201).send({mensaje: "usuario modificado", usuarios})


    
})

app.delete("/api/users/:userId", (request, response)=>{
    const {userId} = request.params
    let usuariosLength = usuarios.length
    const users = usuarios.filter(user => user.id !== userId)
    if(users.length === usuariosLength ){
        response.status(404).send({mensaje: "usuario no encontrado"})
    }
    response.status(200).send({mensaje: "usuario eliminado",   users})
})

// http://localhost:8080/query
app.get('/query', (req, res) => {

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


app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`)
    console.log("hola desde server")
})

