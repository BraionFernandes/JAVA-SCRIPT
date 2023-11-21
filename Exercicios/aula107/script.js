const carro=document.getElementById("carro");
const btnEsquerda=document.getElementById("btnEsquerda");
const btnDireita=document.getElementById("btnDireita");

const init=()=>{
    carro.style="position:relative;left:0px;"
}

btnEsquerda.addEventListener("click",()=>{
    carro.style.left=parseInt(carro.style.left) - 100 +"px"
})

btnDireita.addEventListener("click",()=>{
    carro.style.left=parseInt(carro.style.left) + 100 +"px"
})

//window.onload=init
window.addEventListener("load",init())