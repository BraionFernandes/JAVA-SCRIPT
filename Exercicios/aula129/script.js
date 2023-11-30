const contador=document.getElementById("contador");

const tmpini=Date.now()

const timer=()=>{
    const tmpatual=Date.now()
    let cont=tmpatual-tmpini
    let seg=Math.floor((tmpatual-tmpini)/1000)
    console.log(seg)
}

setInterval(timer,1000)
