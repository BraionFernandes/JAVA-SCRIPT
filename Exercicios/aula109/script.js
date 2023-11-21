const carro=document.getElementById("carro");
const btnParar=document.getElementById("btnParar");
const btnEsquerda=document.getElementById("btnEsquerda");
const btnDireita=document.getElementById("btnDireita");

const init=()=>{
    carro.style="position:relative;left:0px;width:100px"
}

let anima=null

const mover=(dir)=>{
        carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
        anima=setTimeout(mover,20,dir)
}

btnParar.addEventListener("click",()=>{
    clearTimeout(anima)
})

btnEsquerda.addEventListener("click",()=>{
    clearTimeout(anima)
    mover(-1)
})

btnDireita.addEventListener("click",()=>{
    clearTimeout(anima)
    mover(1)
})

//window.onload=init
window.addEventListener("load",init())