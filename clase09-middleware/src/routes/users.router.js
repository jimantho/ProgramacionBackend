const {Router} = require("express")

const router = Router()

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

// http://localhost:8080/api/users
router.get('/',(req, res)=>{
    res.status(200).send(usuarios)
})

router.get('/:id',(req, res)=>{
    const {id} = req.params
    res.status(200).send(id)
})

// http://localhost:8080/api/users
router.post("/", (request, response) => {
    let user = request.body
    console.log(user)
    // console.log("usarios", users)
    if (!user.first_name || !user.last_name) {
        return response.status(400).send({ mensaje: "pasar los datos por favor" })
    }
    usuarios.push(user)
    console.log("usuarios", usuarios)
    response.status(201).send({ user, mensaje: "usuario agregado" })
})

// http://localhost:8080/api/users/:userId
router.put("/:userId", (request, response) => {
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

router.delete("/:userId", (request, response)=>{
    const {userId} = request.params
    let usuariosLength = usuarios.length
    const users = usuarios.filter(user => user.id !== userId)
    if(users.length === usuariosLength ){
        response.status(404).send({mensaje: "usuario no encontrado"})
    }
    response.status(200).send({mensaje: "usuario eliminado",   users})
})


module.exports = router