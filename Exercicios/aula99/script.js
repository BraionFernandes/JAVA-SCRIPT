class Jogador{
    constructor(nome){
        this.nome=nome
        this.id=Symbol()
    }
}

let jogadores=[new Jogador("j1"),new Jogador("j2"),new Jogador("j3"),new Jogador("j4")]

let s1=jogadores[0].id


jogadores=jogadores.filter((j)=>{
    return j.id!=s1
})

console.log(jogadores)
console.log(s1)