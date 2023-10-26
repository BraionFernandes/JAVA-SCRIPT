const Pessoa={
    nome: "",
    idade: "",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome){
        return this.nome=nome
    },
    setIdade:function(idade){
        return this.idade=idade
    }
}
    let nome=Pessoa.nome
    let idade=Pessoa.idade
    const btn_add=document.querySelector("#btn-add")
    const res=document.querySelector(".res")

    const addPessoa=(el)=>{
        const div=document.createElement('p')
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${nome}<br>Idade: ${idade}`
        res.appendChild(div)
    }
    btn_add.addEventListener("click",()=>{
        const nome=document.querySelector("#nome").value
        const idade=document.querySelector("#idade").value
        nom=nome
        idad=idade
        addPessoa()
    })