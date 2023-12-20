import { cxMsg } from "./cxmsg.js";
const config={
    cor:"#48f",
    tipo:"2",   // 1= 1 botao OK 2= 2 botoes sim e não
    textos:["SIM","NÃO"],
    comandoSim:()=>{null}
}

const btnMostrarcx=document.querySelector("#btnMostrarcx");
const btnMostrarcx2=document.querySelector("#btnMostrarcx2");

btnMostrarcx.addEventListener("click",()=>{
    config.tipo="1"
    cxMsg.mostrar(config,"NOME:","BRAION FERNANDES")
})
btnMostrarcx2.addEventListener("click",()=>{
    config.tipo="2"
    config.textos=["OK","CANCELAR"]
    cxMsg.mostrar(config,"NOME:","BRAION FERNANDES")
})
