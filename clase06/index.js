/* let obj = { 5: 6, 7: 8 }
let lista = [{ nombre: 'pedro', edad: 56 }, { nombre: 'pedra', edad: 56 }] */

let obj = {}
for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 20 + 1)
    let number2 = Math.ceil(Math.random() * 20)
//obj[number] = (obj[number] // 0) + 1
    // console.log(number)
    // console.log('en obj: ',obj[number])
    if(!obj[number]){
        obj[number] = 1
        // console.log('despues:',obj[number])
    }
    else{
        obj[number] ++
    }
    // console.log(obj[number])


}
/* console.log(obj[5])
console.log(lista[1]) */

// console.log(obj)

// ================================================================
const ManagerUsuarios = require("./managerUsuarios");

const manager = new ManagerUsuarios()

const env = async () => {
    let primeraConsultaUsuarios = await manager.consultarUsuarios();
    // console.log(primeraConsultaUsuarios); //debe devolver vacio

    let user = {
        nombre: "anyela",
        apellido: "alanya",
        edad: 25,
        curso: "backend",
        contrasena: '123'
    }

    let result = await manager.crearUsuario(user);
    // console.log(result);
    let segundaConsultaUsuarios = await manager.consultarUsuarios();
    // console.log(segundaConsultaUsuarios)

    manager.validarUsuario("anyela","123")
}

env();
//==========================================
const express = require('express')
// console.log(express)

// ================================================================

// Ejercicio moment
/* 
const moment = require('moment')

let actual = moment()
console.log(actual)
let nacimiento = moment('2000-06-11', 'YYYY Do MMMM');
let nacimiento2 = moment()
console.log(nacimiento)

if(actual.isValid() && nacimiento.isValid()){
    let diferencia = actual.diff(nacimiento, 'day');
    let diferencia2 = actual.diff()
    console.log(diferencia)
}
 */
