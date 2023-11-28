const pTemp=document.getElementById("pTemp");
const pNivel=document.getElementById("pNivel");
const pPress=document.getElementById("pPress");
const btnTexto=document.getElementById("btnTexto");
const obterDados=()=>{
    const endpoint="https://braionfernandes.braionkuro01.repl.co/"
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        pTemp.innerHTML=`Temperatura: ${dados.temperatura}`
        pNivel.innerHTML=`Nivel: ${dados.nivel}`
        pPress.innerHTML=`Pressão: ${dados.pressao}`
    })
}
let dados={
    nome:"Braion",
    empresa:"Empire Corp.",
    patrimonio:"11 Trilhões"
}
let cabecalho={
    method: "POST",
    body:JSON.stringify(dados)
}
const gravarDados=()=>{
    const endpoint="https://braionfernandes.braionkuro01.repl.co/"
    fetch(endpoint,cabecalho)
    .then(res=>res.json())
    .then(ret=>{
        console.log(ret)
    })
}

btnTexto.addEventListener("click",(evt)=>{
    //obterDados()
    gravarDados()
})