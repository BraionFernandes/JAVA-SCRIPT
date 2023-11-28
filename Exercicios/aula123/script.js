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
btnTexto.addEventListener("click",(evt)=>{
    obterDados()
})