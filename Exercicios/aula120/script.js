const fnome=document.getElementById("fnome");
const fnota=document.getElementById("fnota");
const fMsg=document.getElementById("fMsg");

document.querySelector("#btnValidar").addEventListener("click",(evt)=>{
    let estadoValidacao=fnota.validity
    if(estadoValidacao.valueMissing){
        fnota.setCustomValidity("Este campo é obrigatório!")
    }else if(estadoValidacao.rangeOverflow){
        fnota.setCustomValidity("Nota acima do normal!")
    }else if(estadoValidacao.rangeUnderflow){
        fnota.setCustomValidity("Nota abaixo do normal!")
    }
    fnota.reportValidity()
    //fMsg.innerHTML=fnota.validationMessage
    evt.preventDefault()
})