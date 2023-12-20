const tmp=document.querySelector("#tmp");
const nv1=document.querySelector("#nv1");
const prs=document.querySelector("#prs");

let dados={
    temperatura:0,
    pressao:0,
    nivel:0,
    set valores(val){
        this.temperatura=val.temperatura
        this.nivel=val.nivel
        this.pressao=val.pressao
        tmp.innerHTML=this.temperatura
        nv1.innerHTML=this.nivel
        prs.innerHTML=this.pressao
    },
    get valores(){
        return [this.temperatura,this.nivel,this.pressao]
    }
}

const buscarDados=()=>{
    const endpoint="https://aula122.braionkuro01.repl.co/"

    fetch(endpoint)
    .then(res=>res.json())
    .then(res=>{
        dados.valores=res
    })
}
let intervalo=setInterval(buscarDados,1000)