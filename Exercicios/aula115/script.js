let numeros=[10,20,30,40,50,60,70,80,90]
let[a,b,c,...d]=numeros

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log("-------------")

let obj={nome:"braion",empresa:"Empire Corp."}
let{nome,empresa}=obj
console.log(nome)
console.log(empresa)
console.log("-------------")

const cores=()=>{
    return ["verde","amarelo","azul","branco"]
}

let[c1,c2,,c3]=cores()

console.log(c1)
console.log(c2)
console.log(c3)
console.log("-------------")

let texto="Curso em Video"
let t=texto.split(" ")

let[p1,p2,p3]=t

console.log(p1)
console.log(p2)
console.log(p3)