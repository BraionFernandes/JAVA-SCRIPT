const q1=document.getElementById("q1");
const q2=document.getElementById("q2");
const posx=document.getElementById("posx");
const posy=document.getElementById("posy");
const largura=document.getElementById("largura");
const altura=document.getElementById("altura");

console.log(q1.getBoundingClientRect())

const propiedades=(el)=>{
    const DOMReact=el.getBoundingClientRect();
    posx.innerHTML=`posx: ${DOMReact.x}`;
    posy.innerHTML=`posy: ${DOMReact.y}`;
    largura.innerHTML=`largura: ${DOMReact.width}`;
    altura.innerHTML=`altura: ${DOMReact.height}`;
}

q1.addEventListener("click",((evt)=>{
    propiedades(evt.target)
}))

q2.addEventListener("click",((evt)=>{
    propiedades(evt.target)
}))
