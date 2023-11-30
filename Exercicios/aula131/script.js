const contador=document.getElementById("contador");
const iniciar=document.getElementById("btnIniciar");
const parar=document.getElementById("btnParar");
const zerar=document.getElementById("btnZerar");

let intervalo=null
let tmpini=null

const timer=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini
    let seg=(tmpatual-tmpini)/1000
    contador.innerHTML=converter(seg)
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)
    const resto=seg%3600
    const minuto=Math.floor(resto/60)
    const segundo=Math.floor(resto%60)
    const tempoFormatado=`${hora<10?"0"+hora:hora}:${minuto<10?"0"+minuto:minuto}:${segundo<10?"0"+segundo:segundo}`
    return tempoFormatado
}

iniciar.addEventListener("click",()=>{
    tmpini=Date.now()
    intervalo=setInterval(timer,1000)
})

parar.addEventListener("click",()=>{
    clearInterval(intervalo)
})

zerar.addEventListener("click",()=>{
    tmpini=Date.now()
    clearInterval(intervalo)
    contador.innerHTML="00:00:00"
})