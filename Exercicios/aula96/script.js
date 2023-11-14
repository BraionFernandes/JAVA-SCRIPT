import contato from "./contatos.js";

const listaContatos=document.getElementById("listaContatos")
const btnGravar=document.getElementById("btnGravar")

btnGravar.addEventListener("click",(evt)=>{
    const cont={
        nome:document.getElementById("nome").value,
        telefone:document.getElementById("telefone").value,
        email:document.getElementById("email").value
    }
    contato.addContato(cont,listaContatos)
})