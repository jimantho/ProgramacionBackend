// const express = require('express')
// para hacer con import tienes que colocar type : module 
import express from 'express'

const app = express()
const PORT = 8080

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

app.get('api/:idUser', (request, response) => {
    const { idUser } = request.params
    const usuarioE = usuarios.find(user => user.id === idUser)
    if (!usuarioE) return response.send("no existe usuario")
    response.send(usuarioE)
})


app.get('/saludo', (req, res) => {
    res.send('<h1>Hola saludos para todos, recuerden el nombre en zoom y valorar</h1>')
})
app.get('/bienvenido', (req, res) => {
    res.send('<h1 style ="color: blue">Bienvenido</h1>')
})
let usuario = {
    id: 1,
    nombre: "anyela",
    edad: 22,
    corro: "alanya@besifrah.com"
}
app.get('/usuario', (req, res) => {
    res.send(usuario)
})

app.get('/params/:nombre/:id', (req, res) => {
    console.log(req.params)
    const { nombre, id } = req.params
    res.send(
        {
            nombre,
            id
        }
    )
})

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


app.listen(PORT, err => {
    if (err) console.log(err)
    console.log(`Escuchando en el puerto ${PORT}`)
    console.log("hola desde server")
})

