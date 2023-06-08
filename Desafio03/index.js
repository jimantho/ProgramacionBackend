const fs = require("fs")
ruta = "./productos.json"

class ProductManager {
    constructor(ruta) {
        this.productos = []
        this.path = ruta
    }

    guardarCambios() {
        fs.promises.writeFile(this.path, JSON.stringify(this.productos), "utf-8")
    }

    getProductos = async () => {
        try {
            if (fs.existsSync(this.path)) {
                let dataProductosJson = await fs.promises.readFile(this.path, "utf-8")
                this.productos = JSON.parse(dataProductosJson)
                return this.productos
            }
            await fs.promises.writeFile(this.path, '[]', 'utf-8')
            return []

        } catch (error) {
            console.log("imprimiendo error: ", error)
        }
    }

    getProductoById = async (id) => {
        this.productos = await this.getProductos()
        const productDB = this.productos.find(producto => producto.id === id)
        if (!productDB) {
            return "No existe producto"
        }
        return productDB
    }

    addProduct = async (newProduct) => {
        this.productos = await this.getProductos()
        const productoDB = this.productos.find(product => product.code === newProduct.code)
        if (productoDB) {
            return "Ya existe el producto"//return "Ya existe el producto" /// cuando se usa return por ejemplo en este caso ya no sigue la siguiente instruccion porque simplemente corta la funcion, pero si le pongo console.log este sigue corriendo la siguiente linea de codido
        }
        if (this.productos.length === 0) {
            newProduct.id = 1
            this.productos.push(newProduct)
            this.guardarCambios()
        } else {
            this.productos = [...this.productos, { ...newProduct, id: this.productos[this.productos.length - 1].id + 1 }]
            this.guardarCambios()
        }
    }

    updateProducto = async(id, producto) => {
        this.productos =  await this.getProductos()
        const indexProductDB = this.productos.findIndex(product => product.code === producto.code)
        if (indexProductDB === -1) {
            return "No existe producto"
        }
        this.productos[indexProductDB] = { id: this.productos[indexProductDB].id, ...producto }
        this.guardarCambios()
    }

    deleteProducto = async (id) => {
        this.productos = await this.getProductos()
        const indexProductDB = this.productos.findIndex(product => product.id === id)
        console.log("indice", indexProductDB)
        if (indexProductDB === -1) {
            return "No existe producto"
        }
        this.productos.splice(indexProductDB, 1)
        this.guardarCambios()

    }
}


const Productos = new ProductManager(ruta)

const corriendoCod = async () => {
    /* let op1 = await Productos.getProductos()
    console.log("producto", op1) 

    let op2 = await Productos.addProduct({ title: "pera", description: "fruta comestible", price: 5, thumnail: "/", code: 9, stock: 18, color: "negro" })
    console.log(op2)
 
    let op3 = await Productos.getProductoById(2)
    console.log("objeto encontrado:",op3)
    
    let op4 = await Productos.deleteProducto(1)  
   */

    let op5 = await Productos.updateProducto(3, {title: "platano largo", description: "fruta comestible", price: 5, thumnail: "/", code: 9, stock: 18, color: "negro"})


}
corriendoCod()