import { contatos } from "./bancoContatos.js";

let contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i){
        return contatos[i]
    },
    addContato:function(novoContato,destinoD){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)
        const div=document.createElement("div")
        div.setAttribute("class","contato")
        const pNome=document.createElement("p")
        pNome.innerHTML=novoContato.nome
        const pTelefone=document.createElement("p")
        pTelefone.innerHTML=novoContato.telefone
        const pEmail=document.createElement("p")
        pEmail.innerHTML=novoContato.email
        div.appendChild(pNome)
        div.appendChild(pTelefone)
        div.appendChild(pEmail)
        destinoD.appendChild(div)
    }
}

export default contato