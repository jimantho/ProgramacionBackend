const fs = require('fs');
const { Router } = require("express")
const ProductManager = require("../claseProducts.js")

const instanciaProducto = new ProductManager()

const router = Router()

// GET http://localhost:8080/api/products/
router.get('/', async (req, res) => {
    let getProductos = await (instanciaProducto.getProductos())
    res.status(200).send(getProductos)
})

// GET http://localhost:8080/api/products/3
router.get('/:pid', async (req, res) => {
    const { pid } = req.params
    let getProductoById = await (instanciaProducto.getProductoById(pid))
    res.status(200).send(getProductoById)
})

// POST http://localhost:8080/api/products/
router.post('/', async (request, response) => {
    let newProduct = request.body
    const resp = await instanciaProducto.addProduct(newProduct)
    response.status(200).send({
        mensaje: resp,
        newProduct
    })
})
// PUT http://localhost:8080/api/products/4
router.put('/:pid', async (request, response) => {
    const { pid } = request.params
    const productUpdate = request.body
    const resp = await instanciaProducto.updateProducto(pid, productUpdate)
    response.status(200).send({
        msj: "actualizado",
        resp
    })
})
// DELETE http://localhost:8080/api/products/3
router.delete('/:pid', async (request, response) => {
    console.log(request.params)
    const { pid } = request.params
    const resp = await instanciaProducto.deleteProducto(pid)
    response.status(200).send({ 
        mensaje: "Producto eliminado", 
        resp })
});


module.exports = router