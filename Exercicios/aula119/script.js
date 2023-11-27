const fnome=document.getElementById("fnome");
const fnota=document.getElementById("fnota");
const fMsg=document.getElementById("fMsg");

document.querySelector("#btnValidar").addEventListener("click",(evt)=>{
    let msg=null

    if(!fnota.checkValidity()){
        msg=fnota.validationMessage
    }

    fMsg.innerHTML=msg
    evt.preventDefault()
})