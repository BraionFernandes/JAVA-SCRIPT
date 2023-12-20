import { cxMsg } from "./cxmsg.js";

const btnMostrarcx=document.querySelector("#btnMostrarcx");

btnMostrarcx.addEventListener("click",()=>{
    cxMsg.mostrar("NOME:","BRAION FERNANDES")
})
