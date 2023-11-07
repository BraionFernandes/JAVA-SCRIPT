const palco=document.getElementById("palco")
const numObjetos=document.getElementById("numObjetos")
const qntObjetos=document.getElementById("qntObjetos")
const btnAdd=document.getElementById("btnAdd")
const btnRemover=document.getElementById("btnRemover")

let larguraPalco=palco.offsetWidth
let alturaPalco=palco.offsetHeight
let bolas=[]
let numBola=0

class Bola{
    constructor(arrayBolas,palco){
        this.tamanho=Math.floor(Math.random()*15)+10
        this.r=Math.floor(Math.random()*255)
        this.g=Math.floor(Math.random()*255)
        this.b=Math.floor(Math.random()*255)
        this.px=Math.floor(Math.random()*(larguraPalco-this.tamanho))
        this.py=Math.floor(Math.random()*(alturaPalco-this.tamanho))
        this.velx=Math.floor(Math.random()*2)+0.5
        this.vely=Math.floor(Math.random()*2)+0.5
        this.dirx=(Math.random()*10)>5?1:-1
        this.diry=(Math.random()*10)>5?1:-1
        this.palco=palco
        this.arrayBolas=arrayBolas
        this.id=Date.now()+"_"+Math.floor(Math.random()*100000000000000)
        this.desenhar()
        this.controle=setInterval(this.controlar,10)
        this.eu=document.getElementById(this.id)
    }
    minhaPos=()=>{

    }
    remover=()=>{

    }
    desenhar=()=>{

    }
    controlar=()=>{

    }
}

window.addEventListener("resize",(evt)=>{
    larguraPalco=palco.offsetWidth
    alturaPalco=palco.offsetHeight
})
btnAdd.addEventListener("click",(evt)=>{
    const quantidade=qntObjetos.value
    for(let i=0;i<quantidade;i++){

    }
})
btnRemover.addEventListener("click",(evt)=>{
    bolas.map((b)=>{

    })
})