const numero=document.getElementById("numero")

let promise=new Promise((apr,rej)=>{
    let resultado=false
    let tempo=3000
    setTimeout(()=>{
        if(resultado){
            apr("Deu tudo certo")
        }else{
            rej("Deu tudo errado")
        }
    },tempo)
})  

promise.then((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.remove("error")
    numero.classList.add("ok")
})
promise.catch((retorno)=>{
    numero.innerHTML=retorno
    numero.classList.add("error")
    numero.classList.remove("ok")
})

numero.innerHTML='Processando...'