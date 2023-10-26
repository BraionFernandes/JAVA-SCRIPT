class Carro{
    canal="Empire Corp."
    constructor(nome,tipo){
        this.nome=nome
        this.canal="YouTube"
        if(tipo==1){
            this.tipo="Esportivo"
            this.velMax=300
        }else if(tipo==2){
            this.tipo="Utilitário"
            this.velMax=100
        }else if(tipo==3){
            this.tipo="Passeio"
            this.velMax=160
        }else{
            this.tipo="Militar"
            this.velMax=180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velMax
    }
    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelMax(velMax){
        this.velMax=velMax
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`V.Max: ${this.velMax}`)
        console.log(`Canal: ${this.canal}`)
        console.log('------------')
    }
}

let c1=new Carro("Rapidão",1)
let c2=new Carro("Super luxo",3)
let c3=new Carro("Bombadão",4)
let c4=new Carro("Carrego Tudo",2)

c1.setNome("Super GT")
c1.setVelMax(450)

c1.info()