class carro{
    constructor(nome,portas){
        this.nome=nome;
        this.portas=portas;
        this.ligado=false;
        this.vel=0;
        this.cor=undefined;
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(cor){
        this.cor=cor
    }
}

class Militar extends carro{
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem;
        this.municao=municao;
        this.setCor="Camuflado";
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1=new carro("Uno",2)
c1.setCor("Preto")

const c2=new Militar("Tiger",1,100,200)

console.log("-----------------")
console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-----------------")
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.setCor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log("-----------------")
