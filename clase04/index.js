const operacion = (num1, num2, cb) =>{
    return cb(false, num1, num2)
}

const suma = (err, num1, num2) => num1 + num2
const resta = (err, num1, num2) => num1 - num2
const mult= (err, num1, num2) => num1 * num2
const div = (err, num1, num2) => err === null ? num1 / num2 : "No se puede dividir por  0"


// console.log(operacion(1,3,(num1,num2) => num1 + num2))
// console.log(operacion(1,3,suma))
// console.log(operacion(1,3,resta))
// console.log(operacion(1,3,mult))
console.log(operacion(1,0,div))