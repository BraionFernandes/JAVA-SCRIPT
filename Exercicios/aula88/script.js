const btnAlert=document.getElementById("btnAlert")
const btnConfirm=document.getElementById("btnConfirm")
const btnPrompt=document.getElementById("btnPrompt")

btnAlert.addEventListener("click",(evt)=>{
    alert("Olá, Mundo!")
})

btnConfirm.addEventListener("click",(evt)=>{
    const ret=confirm("Download em andamento...")
    console.log(ret)
})

btnPrompt.addEventListener("click",(evt)=>{
    prompt("Digite seu CPF:")
})