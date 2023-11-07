const mat=document.getElementById("mat")
const botao=document.getElementById("botao")

botao.addEventListener("click",()=>{
    mat.innerHTML=Math.floor(Math.random()*11)
})