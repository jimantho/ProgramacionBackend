const fs = require("fs")
const { join } = require("path")

ruta = "/.productos.json"

class ProductManager {
    constructor() {
        this.productos = []
        this.path = ruta
    }

    guardarCambios(){
        fs.writeFile(this.path,JSON.stringify(this.productos))
    }

    getProductos() {
        return this.productos // [{},{}]
        //  0   1  2  3
    }

    getProductById(id) {
        const productDB = this.productos.find(producto => producto.id === id)
        if (!productDB) {
            return "No existe product"
        }
        return productDB
    }

    addProduct(newProduct) {
        const productoDB = this.productos.find(product => product.code === newProduct.code)
        // console.log(productoDB)
        if (productoDB) {
            return "Ya existe el producto"
        }
        if (this.productos.length === 0) {
            newProduct.id = 1
            this.productos.push(newProduct)
            guardarCambios()
        } else {
            this.productos = [... this.productos, { id: this.productos[this.productos.length - 1].id + 1, ...newProduct }]
            this.guardarCambios()
        }
    }

    updateProducto(producto) {
        const indexProductDB = this.productos.findIndex(product => product.id === producto.id)
        if (indexProductDB === -1) {
            return "No existe producto"
        }
        this.productos[indexProductDB] = { id: this.productos[indexProductDB].id, ...producto }
        this.guardarCambios()
    }

    deleteProducto(id) {
        const indexProductDB = this.productos.findIndex(product => product.id === id)
        if (indexProductDB === -1) {
            return "No existe producto"
        }
        this.productos.splice(indexProductDB,1)

    }
}
/* addProduct(title, description, price, thumbnail, stock) {
    const producto = {
        title,
        description,
        price,
        thumbnail,
        stock
    }
 
    this.productos.length === 0 ? producto.id = 1 : producto.id = this.productos[this.productos.length - 1].id + 1;
    console.log(this.productos[0])
    this.productos.push(producto)
} */

const leerArchivo = async () => {
    try {
        let dataProductosJson = await fs.promises.readFile(path, "utf-8")
        this.productos = JSON.parse(dataProductosJson)

        console.log("imprimiendo: ", this.productos)
    } catch {
        console.log("No se pudo leer el archivo correctamente")
    }
}


leerArchivo();

const Productos = new ProductManager()
/* Productos.addProduct("platano", "fruta comestible", 6, "/", 86)
Productos.addProduct("manzana", "fruta comestible", 5, "/", 78)
Productos.addProduct("palta", "verde", 9, "/", 6) */

// console.log(getProductos.getProductos())
// console.log(Productos.addProduct({ code: 1 }))

console.log(Productos.addProduct({ title: "manzana", description: "fruta comestible", price: 5, thumnail: "/", code: 4, stock: 18, color: "negro" }))
console.log(Productos.addProduct({ title: "manzana2", description: "fruta comestible", price: 5, thumnail: "/", code: 3, stock: 76, colr: "amarillo" }))
console.log(Productos.addProduct({ title: "manzana2", description: "fruta comestible", price: 5, thumnail: "/", code: 4, stock: 79, color: "verde" }))
console.log(Productos.addProduct({}))


console.log(Productos.getProductos())

// console.log(Productos.getProductById(2))

