const valores=[10,8,9,2,15,4,7,0]
const itValores=valores[Symbol.iterator]()

const texto="YouTube"
const itTexto=texto[Symbol.iterator]()

console.log(texto)
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
console.log(itTexto.next())
//Arrays, String, Map, Sets