/* const task = new Promise((res, rej) => {
    //acciones
    rej("Tod mal")
    //rej("tooo mal")

}) */
//console.log(task) //pendiente, cumplido, rechazado
/* task
.then(respuestaRes => {
    // throw = new Error("Error")
    console.log(respuestaRes)})
.catch( err => console.log(err)) */

/* const dividir = (dividendo, divisor) => {
    return new Promise((res, rej) => {
        if (divisor === 0) {
            rej("no puedo dividir entre 0")
        } else {
            res(dividendo / divisor)
        }

    })
}

dividir(30, 5)
    .then(respuestaRes => {
        console.log(respuestaRes)
    })
    .catch(err => console.log(err)) */


// ASYNC AWAIT
const dividir = (dividendo, divisor) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (divisor === 0) {
                rej("no puedo dividir entre 0")
            } else {
                res(dividendo / divisor)
            }

        }, 200)
    })

}

async function empezarDividir() {
    try {
        let resultado = await dividir(2, 2)
        console.log(resultado * 3 + 1)
    } catch (error) {
        console.log(error)
    }


}

empezarDividir()