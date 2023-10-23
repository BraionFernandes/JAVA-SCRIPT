const array=document.querySelector("#array")
const btnVerificar=document.querySelector("#btnVerificar")
const resultado=document.querySelector("#resultado")

const elementos=[8,12,13,19,15,11]
array.innerHTML=elementos

btnVerificar.addEventListener("click",(evt)=>{
    const ret=elementos.some((e,i)=>{
        if(e<18){
            resultado.innerHTML=`Array não conforme na posição ${i}`
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="OK"
    }
})