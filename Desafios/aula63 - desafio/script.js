const militar=document.querySelector("#militar")
const civil=document.querySelector("#civil")
const nome=document.querySelector("#nome")
const marca=document.querySelector("#marca")
const cor=document.querySelector("#cor")
const portas=document.querySelector("#portas")
const blindagem=document.querySelector("#blindagem")
const municao=document.querySelector("#municao")
const blindagemV=document.querySelector("#blindagem-input")
const municaoV=document.querySelector("#municao-input")
const btn_add=document.getElementById("btn-add")
const tipoMilitar=document.querySelector("#tipo-militar")
const tipoCivil=document.querySelector("#tipo-civil")
const veiculosCivil=document.querySelector("#veiculosCivil")
const veiculosMilitar=document.querySelector("#veiculosMilitar")
c=0
m=0
class Civil{
    constructor(nome,marca,cor,portas){
        this.nome=nome;
        this.marca=marca;
        this.cor=cor;
        this.portas=portas;
    }
}
class Militar extends Civil{
    constructor(nome,marca,cor,portas,blindagem,municao){
        super(nome,marca,cor,portas)
        this.blindagem=blindagem;
        this.municao=municao;
    }
}
tipoMilitar.addEventListener("click",()=>{
    civil.setAttribute("class","escondido")
    militar.removeAttribute("class","escondido")
    blindagem.removeAttribute("class","escondido")
    municao.removeAttribute("class","escondido")
})
tipoCivil.addEventListener("click",()=>{
    militar.setAttribute("class","escondido")
    civil.removeAttribute("class","escondido")
    blindagem.setAttribute("class","escondido")
    municao.setAttribute("class","escondido")
})
btn_add.addEventListener("click",()=>{
    const nome=document.querySelector("#nome")
    const marca=document.querySelector("#marca")
    const cor=document.querySelector("#cor")
    const portas=document.querySelector("#portas")
    const blindagem=document.querySelector("#blindagem-input")
    const municao=document.querySelector("#municao-input")

    const newCivilVeiculo=new Civil(nome.value,marca.value,cor.value,portas.value)
    const newMilitarVeiculo=new Militar(nome.value,marca.value,cor.value,portas.value,blindagem.value,municao.value)
    
    if(tipoMilitar.checked){
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id","M"+m)
        novoElemento.setAttribute("class","div-veiculo")
        novoElemento.innerHTML=`Nome: ${newMilitarVeiculo.nome}<br>Marca: ${newMilitarVeiculo.marca}<br>Cor: ${newMilitarVeiculo.cor}<br>Portas: ${newMilitarVeiculo.portas}<br>Blindagem: ${newMilitarVeiculo.blindagem}<br>Munição: ${newMilitarVeiculo.municao}`
        veiculosMilitar.appendChild(novoElemento)
        m++
    }
    if(tipoCivil.checked){
        const novoElemento=document.createElement("div")
        novoElemento.setAttribute("id","C"+c)
        novoElemento.setAttribute("class","div-veiculo")
        novoElemento.innerHTML=`Nome: ${newCivilVeiculo.nome}<br>Marca: ${newCivilVeiculo.marca}<br>Cor: ${newCivilVeiculo.cor}<br>Portas: ${newCivilVeiculo.portas}`
        veiculosCivil.appendChild(novoElemento)
        c++
    }
    nome.value=""
    marca.value=""
    cor.value=""
    portas.value=""
    blindagem.value=""
    municao.value=""
})