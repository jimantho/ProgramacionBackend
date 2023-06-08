const fs = require('fs');
const { Router } = require("express");
const CartsManager = require("../claseCart.js")

const instanciaCart = new CartsManager()

const router = Router()

// GET http://localhost:8080/api/carts/
router.get('/', async (req, res) => {
    let getCart = await (instanciaCart.getCart())
    res.status(200).send(getCart)
})
// GET http://localhost:8080/api/products/3
router.get('/:cid', async (req, res) => {
    const { cid } = req.params
    let getProductsByCartDB = await (instanciaCart.getProductosByIdCart(cid))
    res.status(200).send(getProductsByCartDB)
})

// POST http://localhost:8080/api/carts/
router.post('/', async (request, response) => {
    let newCart = request.body
    const resp = await (instanciaCart.addProduct(newCart))
    response.status(200).send({
        mensaje: resp,
        newCart
    })
})

// POST http://localhost:8080/api/carts/
router.post('/:cid/product/:pid', async (request, response) => {
    let {cid,pid} = request.params
    const idCartyProduct = await (instanciaCart.addProductByIdCart(cid,pid))
    response.status(200).send({
        mensaje: "Producto agregado al carrito",
        idCartyProduct
    })
})

module.exports = router