const caixa1=document.querySelector("#caixa1")
const cursos=[...document.querySelectorAll(".curso")];
const cursos1=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]

cursos1.map((el,chave)=>{
    const novoElemento=document.createElement("div");
    novoElemento.setAttribute("id","c"+chave);
    novoElemento.setAttribute("class","curso c1");
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
});