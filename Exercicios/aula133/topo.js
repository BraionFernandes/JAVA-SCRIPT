const head=document.head;
const body=document.body;

const estilo="<link rel='stylesheet' href='topo.css'>"
head.innerHTML+=estilo

const topo=document.createElement("header");
topo.setAttribute("id","cabecalho")
topo.setAttribute("class","cabecalho")
body.prepend(topo)

const logo=
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' tittle='CFBCursos'/>"+
    "</div>"
topo.innerHTML+=logo

const login=
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matrícula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "</div>"
topo.innerHTML+=login