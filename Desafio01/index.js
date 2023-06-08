class ProductManager {
    constructor() {
        this.productos = []
    }

    getProductos() {
        return this.productos // [{},{}]
        //  0   1  2  3
    }

    getProductById(id) {
        const productDB = this.productos.find(producto => producto.id === id)
        if(!productDB){
            return "No existe product"
        }
        return productDB
    }

    addProduct(newProduct) {
        const productoDB = this.productos.find(product => product.code === newProduct.code)
        // console.log(productoDB)
        if (productoDB) {
            return "Se encuentra producto"
        }
        if (this.productos.length === 0) {
            newProduct.id = 1
            this.productos.push(newProduct)
        } else {
            this.productos = [... this.productos, {... newProduct,id: this.productos[this.productos.length - 1].id + 1}]

        }
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


const Productos = new ProductManager()
/* Productos.addProduct("platano", "fruta comestible", 6, "/", 86)
Productos.addProduct("manzana", "fruta comestible", 5, "/", 78)
Productos.addProduct("palta", "verde", 9, "/", 6) */

// console.log(getProductos.getProductos())
// console.log(Productos.addProduct({ code: 1 }))

console.log(Productos.addProduct({title: "manzana", description: "fruta comestible", price: 5, thumnail:"/",  code:1 ,stock: 18}))
console.log(Productos.addProduct({title: "manzana2", description: "fruta comestible", price: 5, thumnail:"/", code:3 , stock: 76}))
console.log(Productos.addProduct({title: "manzana2", description: "fruta comestible", price: 5, thumnail:"/", code:3 , stock: 79}))


console.log(Productos.getProductos())

console.log(Productos.getProductById(9))

