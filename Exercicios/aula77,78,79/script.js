const divData=document.getElementById("divData")
const divRelogio=document.getElementById("divRelogio")
const btnAtivar=document.getElementById("ativar")
const btnParar=document.getElementById("parar")
const tmpAlarme=document.getElementById("tmpAlarme")
const horaAlarme=document.getElementById("horaAlarme")
const principal=document.querySelector(".principal")

let tsAtual=null
let tsAlarme=null
let alarmeAtivado=false
let alarmeTocando=false

btnAtivar.addEventListener("click",()=>{
    tsAtual=Date.now()
    tsAlarme=tsAtual+(tmpAlarme.value*60000)
    alarmeAtivado=true
    const dtAlarme=new Date(tsAlarme)
    horaAlarme.innerHTML=`Hora do Alarme: ${dtAlarme.getHours()}:${dtAlarme.getMinutes()}:${dtAlarme.getSeconds()}`
})

btnParar.addEventListener("click",()=>{
    alarmeAtivado=false
    alarmeTocando=false
    horaAlarme.innerHTML=`Hora do Alarme:`
    tmpAlarme.value=0
    principal.classList.remove("alarme")
})

const data=new Date()

let dia=data.getDate()
dia=dia<10?"0"+dia:dia
let mes=data.getMonth()
mes=mes<10?"0"+mes:mes
const data_r=`${dia}/${mes}/${data.getFullYear()}`
divData.innerHTML=data_r

const relogio=()=>{
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora
    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto
    let segundo=data.getSeconds()
    segundo=segundo<10?"0"+segundo:segundo
    const completa=`${hora}:${minuto}:${segundo}`
    divRelogio.innerHTML=completa
    if(alarmeAtivado && !alarmeTocando){
        if(data.getTime()>= tsAlarme){
            alarmeTocando=true
        principal.classList.add("alarme")
        }
    }
}

const intervalo=setInterval(relogio,1000)