const contador=document.getElementById("contador");

const tmpini=Date.now()

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
    const form=`${hora<10?"0"+hora:hora}:${minuto<10?"0"+minuto:minuto}:${segundo<10?"0"+segundo:segundo}`
    return form
}

setInterval(timer,1000)
