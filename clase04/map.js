const array = [2,4,56,3]

const funcionCallback = (num) =>{
    if(num % 2 === 0){
        return num
    }else{
        return 'es par'
    }
}
const newArray = array.map(funcionCallback)
console.log(newArray)