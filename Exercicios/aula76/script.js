const numero=document.getElementById("numero")
const btnPromessa=document.getElementById("btn-promessa")

btnPromessa.addEventListener("click",()=>{
    numero.innerHTML='Processando...'
    promessa()

    .then((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.remove("error")
        numero.classList.add("ok")
    })
    .catch((retorno)=>{
        numero.innerHTML=retorno
        numero.classList.add("error")
        numero.classList.remove("ok")
    })
})

const promessa=()=>{
    let p=new Promise((apr,rej)=>{
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
    return p
}

numero.innerHTML='Esperando'