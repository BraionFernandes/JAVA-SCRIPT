const array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos=[21,30,40,55,43,89]
array.innerHTML=elementos

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos.every((e,i)=>{
        if(e<18){
            resultado.innerHTML=`Array não conforme na posição ${i}`
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="OK"
    }
})