const array=document.querySelector("#array")
const btnReduzir=document.querySelector("#btnReduzir")
const resultado=document.querySelector("#resultado")

const elementos=[1,2,3,4,5]
let ant=[]
let atu=[]

array.innerHTML=elementos

btnReduzir.addEventListener("click",(evt)=>{
    resultado.innerHTML=elementos.reduce((anterior,atual,pos)=>{
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior
    })
    resultado.innerHTML+=`<br> ${ant}`
    resultado.innerHTML+=`<br> ${atu}`
})