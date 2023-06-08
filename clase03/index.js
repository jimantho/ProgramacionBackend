//ES6
const valoresBase = [1, 2, 3, 4, 5, 6]
const valoresPotencia = valoresBase.map((base, index) => base ** index)
//console.log(valoresPotencia)

const nombre = ["fede", "pedro", "juana"]
// console.log(nombre.includes("iiines"))

/* if (nombre.includes("Juan")) {
    console.log("Si esta juan")
} else {
    console.log("No esta juan")
} */

//ES8 ..> async await (sugar syntax ..> promesas)
const impuestos = {
    impuesto1: 234,
    impuesto2: 345,
    impuesto3: 3345,
    impuesto4: 3555,
}

let parKeyValue = Object.entries(impuestos)
let soloPropiedades = Object.keys(impuestos)
let soloValores = Object.values(impuestos)


// console.log(soloPropiedades)

/* console.log(soloValores.reduce((sumaTotal, elementoArray) =>sumaTotal += elementoArray,0)) */

// foreach{
//     let sumador = 0
// }

// spread operator

const obj1 = {
    propiedad1: '1',
    propiedad2: 'c',
    propiedad3: true
}

const obj2 ={
    propiedad6: 7,
}

// destructuring
/* const propiedad1 = obj1.propiedad1
const propiedad2 = obj1.propiedad2
console.log(propiedad1,propiedad2) */

// const {propiedad1 = propiedad1, propiedad2 = propiedad2}= obj1
//en react seria asi desectructrando puede ser una llave o un [] dependiendo si es un array
const {propiedad1, propiedad2}= obj1

// console.log(propiedad1,propiedad2)


// spread
// solo copia las propiedades mas no todo el objeto
const obj3 = {... obj1, ... obj2}
// console.log(obj3)

// Actividad en clase
/* Descripción de la actividad. 
Dados los objetos indicados en la siguiente diapositiva:
Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values) */

const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}

]

let newLista = []
let totalProductos = 0


for(const item of objetos){
    let items = Object.keys(item)
    for(const frutas of items){
        if(!newLista.includes(frutas)){
            newLista.push(frutas)
        }    
    }
}
console.log(newLista)

