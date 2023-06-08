const {Router} = require("express")

const router = Router()

const fakeapi = [
    { name: "pina" , precio: 20 }, 
    { name: "pina", precio: 20 }, 
    {name: "pina", precio: 20}, 
    {name: "pina", precio: 20 }
]
router.get("/", (req, res) => {
    let testUser = {
        name: "Anye",
        last_name: "Alanya",
        role: 'user'
    }
    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === 'admin',
        fakeapi,
        style: "index.css"
    })
})

router.get("/register",(req, res) => {
    res.render('register')
})

module.exports = router