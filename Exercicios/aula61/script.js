const Pessoa={
    nome:"Braion",
    getNome:function(){
        return this.nome
    },
    setNome:function(nome){
        this.nome=nome
    },
}

const p2=Pessoa
const p3=Pessoa

p3.nome="Taisler"
p2["nome"]="Tailon"
Pessoa.setNome("Guanabara")

console.log(Pessoa.nome)
console.log(p2.getNome())
console.log(p3.nome)