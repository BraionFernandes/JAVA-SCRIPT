const carro=document.getElementById("carro");
const btnParar=document.getElementById("btnParar");
const btnStart=document.getElementById("btnStart");

const init=()=>{
    carro.style="position:relative;left:0px;width:100px"
    tamMax=window.innerWidth-parseInt(carro.style.width)
}

let anima=null
let tamMax=null

const move=(dir)=>{
    if(dir>0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
            anima=setTimeout(move,20,dir)
        }
        else{
            clearTimeout(anima)
            move(-1)
        }
        }else if(dir<0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left=parseInt(carro.style.left) + (10*dir) +"px"
            anima=setTimeout(move,20,dir)
        }else{
            clearTimeout(anima)
            move(1)
        }
    }
}

btnParar.addEventListener("click",()=>{
    clearTimeout(anima)
})

btnStart.addEventListener("click",()=>{
    clearTimeout(anima)
    move(1)
})

window.addEventListener("load",init())
window.addEventListener("resize",()=>{
    tamMax=window.innerWidth-parseInt(carro.style.width)
})
