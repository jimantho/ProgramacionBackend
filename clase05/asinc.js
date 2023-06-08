/* console.log("iniciando tarea")
setTimeout(()=>{
    console.log("realizando operacion 2")
})
console.log("realizando operacion")
console.log("continuando operacion")
console.log("tarea finalizada" )

const temporizador =(cb) =>{
    setTimeout(() => {
        cb
    },3000)
}
let operacion =() => {
    "realizando operacion 2"
}

console.log("iniciando tarea 1")
temporizador(operacion)

console.log("tarea finalizada 3") */

// SET INTERVAL

// cada tiempo que se indica va seguir ejecutando

let contador = () =>{
    let counter = 1
    console.log("realizando operacion2")
    let timer = setTimeout(()=>{
        console.log(counter++)
        /* detiene el intervalo */
        if (counter > 5){
            clearInterval(timer)
        }
    },1000)
}