const array=document.querySelector("#array")
const txtPesquisar=document.querySelector("#txt-pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const result=document.querySelector("#resultado")

const elementos=[10,5,4,2,30,75]

array.innerHTML=elementos

btnPesquisar.addEventListener("click",(evt)=>{
    result.innerHTML="Valor não encontrado"
    elementos.find((e,i)=>{
        if(e==txtPesquisar.value){
            result.innerHTML=`Valor encontrado ${e} na posição ${i}`
        }
    })
})