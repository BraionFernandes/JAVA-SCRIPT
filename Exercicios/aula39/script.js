const caixa1=document.querySelector("#caixa1");
const cursos=[...document.querySelectorAll(".curso")];

console.log(caixa1.hasChildNodes());
console.log(cursos[0].hasChildNodes());
console.log(cursos[0].childNodes);

console.log(cursos[0].children.length > 0 ? "Possui filhos." : "Não possui filhos.");