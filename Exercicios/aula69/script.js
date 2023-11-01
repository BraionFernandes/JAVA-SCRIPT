class CarroPadrao{
    constructor(){
        if(this.constructor===CarroPadrao){
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if(this.ligar===undefined){
            throw new TypeError("É obrigatório implementar o método Ligar")
        }
        if(this.desligar===undefined){
            throw new TypeError("É obrigatório implementar o método Desligar")
        }
        this.rodas=4
        this.portas=4
        this.ligado=false
    }
    ligar(){
        this.ligado=true
    }
    desligar(){
        this.ligado=false
    }
}

class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.Turbo=new Turbo(estagioTurbo)
        if(tipo==1){
            this.velMax=120
            this.nome="Normal"
        }else if(tipo==2){
            this.velMax=160
            this.nome="Esportivo"
        }else if(tipo==3){
            this.velMax=200
            this.nome="Super-Esportivo"
        }
        this.velMax+=this.Turbo.potencia
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.Turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log("-------------")
    }
}

class Turbo{
    constructor(e){
        if(e==0){
            this.potencia=0
        }
        if(e==1){
            this.potencia=50
        }
        else if(e==2){
            this.potencia=75
        }
        else if(e==3){
            this.potencia=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.velMax=300+this.Turbo.potencia
        this.nome="Carro Especial"
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`VelMax: ${this.velMax}`)
        console.log(`Turbo: ${this.Turbo.potencia}`)
        console.log("-------------")
    }
}

const c1=new Carro(3,2)
const c2=new Carro(2,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.info()