import { contatos } from "./bancoContatos.js";

const contato={
    getTodosContatos:function(){
        return contatos
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },
    addContato:function(novoContato,destinoDOM){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }
        contatos.push(cont)

        destinoDOM.innerHTML=""

        contatos.forEach((c)=>{
            const div=document.createElement("div")
            div.setAttribute("class","contato")
            const p_nome=document.createElement("p")
            p_nome.innerHTML=c.nome
            const p_telefone=document.createElement("p")
            p_telefone.innerHTML=c.telefone
            const p_email=document.createElement("p")
            p_email.innerHTML=c.email
            const btn=document.createElement("button")
            btn.innerHTML="Apagar"
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_email)
            div.appendChild(btn)
            destinoDOM.appendChild(div)

            btn.addEventListener("click",(evt)=>{
                const newContatos=contatos.filter((i) => {
                    return i["email"] !== div.children[2].innerHTML;
                });
                contatos.length=0;
                contatos.push(...newContatos);
                div.remove()

                console.log(contatos)
            });
        })
    }
}

export default contato