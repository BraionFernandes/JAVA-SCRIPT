const btn_add=document.querySelector("#btn-add")
const res=document.querySelector(".res")

class Pessoa{
    constructor(nome,idade){
        this.nome=nome
        this.idade=idade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome=nome
    }
    setIdade(idade){
        this.idade=idade
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log('------------')
    }
}

let pessoas=[]

const addPessoa=()=>{
    res.innerHTML=""
    pessoas.map((p)=>{
        const div=document.createElement("p")
        div.setAttribute("class","pessoa")
        div.innerHTML=`Nome: ${p.getNome()} Idade: ${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",()=>{
    const nome=document.querySelector("#nome")
    const idade=document.querySelector("#idade")
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value=""
    idade.value=""
    nome.focus()
    addPessoa()
})