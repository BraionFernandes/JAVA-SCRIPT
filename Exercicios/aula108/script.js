const carro=document.getElementById("carro");
const btnParar=document.getElementById("btnParar");
const btnEsquerda=document.getElementById("btnEsquerda");
const btnDireita=document.getElementById("btnDireita");

const init=()=>{
    carro.style="position:relative;left:0px"
}

let anima=null

const mover=(dir)=>{
        carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
}

btnParar.addEventListener("click",()=>{
    clearInterval(anima)
})

btnEsquerda.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(mover,20,-1)
})

btnDireita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(mover,20,1)
})

//window.onload=init
window.addEventListener("load",init())