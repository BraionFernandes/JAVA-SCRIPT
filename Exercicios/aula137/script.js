const config={
    tittle:"Teste",
    texto:"Bem Vindo!!",
    cor:"#48f"
}
const cxmsg=new cxMsg(config)

const btnMostrarcx=document.querySelector("#btnMostrarcx");

btnMostrarcx.addEventListener("click",()=>{
    cxmsg.mostrar()
})
