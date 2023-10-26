const caixa=document.querySelector("#caixa")

let mapa=new Map()

mapa.set("curso","JavaScript")
mapa.set(10,"Empire")
mapa.set(1,100)
mapa.set("canal",98)

mapa.delete(1)

console.log(mapa)


let pes=10
let res=""
if(mapa.has("canal")){
    caixa.innerHTML="A chave existe na coleção com o valor: " + mapa.get(pes)
}else{
    caixa.innerHTML="A chave NÃO está na coleção"
}
res+="<br> O tamanho da coleção é " + mapa.size
caixa.innerHTML+=res
mapa.forEach((el)=>{
    console.log(el)
})