class Npc{
    static alerta=false
    constructor(nome,energia){
        this.nome=nome
        this.energia=energia
    }
    info=function(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta?"Sim":"Não")}`)
        console.log("-----------------")
    }
}
const npc1=new Npc("Queen",2500)
const npc2=new Npc("Ravager",1000)
const npc3=new Npc("Pretorian",750)

Npc.alerta=true

npc1.info()
npc2.info()
npc3.info()