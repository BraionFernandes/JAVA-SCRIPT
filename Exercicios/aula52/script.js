const caixa=document.getElementById("caixa")

let cores=["Azul","Preto","Branco","Dourado"]
let cursos=["HTML","CSS","JavaScript",cores]

cursos.push("C++")
cursos.unshift("Python")
cursos.shift()


cursos.map((el)=>{
    let p=document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})