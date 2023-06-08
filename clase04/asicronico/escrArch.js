module.exports = function escribirArchivo(texto,callback){
    console.log(texto)
    setTimeout(()=>{
        callback()
    },3000)
}