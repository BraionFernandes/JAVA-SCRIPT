class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new Jogador("j1"),new Jogador("j2"),new Jogador("j3"),new Jogador("j4"),new Jogador("j1")]

let s=[0]


let Sjogadores=jogadores.filter((j)=>{
    return j.nome=="j1"
})

s=Sjogadores.map((j)=>{
    return j.id
})

console.log(jogadores)
console.log(Sjogadores)
console.log(s)