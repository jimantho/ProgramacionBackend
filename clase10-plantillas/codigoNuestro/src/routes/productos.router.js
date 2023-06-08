const {Router} = require("express")

const router = Router()

router.use((req, res, next) =>{
    console.log("TIme: ", Date())
    next()
})

//GET api.productos
router.get('/',(req, res)=>{
    res.status(200).send({
        dato1: req.dato1,
        dato2: req.dato2
    })
})

router.post('/',(req, res)=>{
    const {name, price} = req.body
    res.status(200).send({name, price})
})

module.exports = router