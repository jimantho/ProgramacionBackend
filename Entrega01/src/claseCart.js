const fs = require('fs');
const ruta = "./carts.json"

class CartsManager {
    constructor() {
        this.carts = []
        this.ruta = ruta
    }

    guardarCambios() {
        fs.promises.writeFile(this.ruta, JSON.stringify(this.carts), "utf-8")
    }
    getCart = async () => {
        try {
            if (fs.existsSync(this.ruta)) {
                let dataCartJson = await fs.promises.readFile(this.ruta, "utf-8")
                this.carts = JSON.parse(dataCartJson)
                return this.carts
            }
            await fs.promises.writeFile(this.ruta, '[]', 'utf-8')
            return []

        } catch (error) {
            console.log("imprimiendo error: ", error)
        }
    }
    getProductosByIdCart = async (id) => {
        this.carts = await this.getCart()
        const productsByCartDB = this.carts.find(cart => cart.id === parseInt(id))
        if (!productsByCartDB) {
            console.log(productsByCartDB)
            return "No existe cart"
        }
        return productsByCartDB
    }


    addCart = async (newCart) => {
        this.carts = await this.getCart()
        const cartDB = this.carts.find(cart => cart.id === newCart.id)
        if (cartDB) {
            return "Ya existe el carrito,"//return "Ya existe el producto" /// cuando se usa return por ejemplo en este caso ya no sigue la siguiente instruccion porque simplemente corta la funcion, pero si le pongo console.log este sigue corriendo la siguiente linea de codido
        }
        if (this.carts.length === 0) {
            newCart.id = 1
            this.carts.push(newCart)
            this.guardarCambios()
        } else {
            this.carts = [...this.carts, { ...newCart, id: this.carts[this.carts.length - 1].id + 1 }]
            this.guardarCambios()
        }
    }
    addProductByIdCart = async (idCart, idProducto,) => { //1,3
        this.carts = await this.getCart()
        const cartDB = this.carts.find(cart => cart.id === parseInt(idCart)) // { products: [ { id: 1, qty: 2 }, { id: 2, qty: 2 } ], id: 2 }
        let indexCarts = this.carts.findIndex(cart => cart.id === parseInt(idCart))
        let productosDB = cartDB.products // [ { id: 1, qty: 2 }, { id: 2, qty: 2 } ]
        let producto = productosDB.find(product => product.id === parseInt(idProducto))
        let indexProducto = productosDB.findIndex(producto => producto.id === parseInt(idProducto))
        
        if (producto) {
            productosDB[indexProducto] = { ...productosDB[indexProducto],qty:productosDB[indexProducto].qty + 1 }
            this.carts[indexCarts] = { ...this.carts[indexCarts], products: productosDB }
            return this.guardarCambios()
        }
        if(productosDB.length === 0) {
            productosDB.push({ id: parseInt(idProducto), qty: 1 })
            this.carts[indexCarts] = { ...this.carts[indexCarts], products: productosDB }
            this.guardarCambios()
        }
        else {
            productosDB = [...productosDB, { id: parseInt(idProducto), qty: 1 }]
            this.carts[indexCarts] = { ...this.carts[indexCarts], products: productosDB }
            this.guardarCambios()
        }



    }
}
module.exports = CartsManager
