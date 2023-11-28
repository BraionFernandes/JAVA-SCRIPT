const texto=document.getElementById("texto");

const endpoint="text.txt"

fetch(endpoint)
.then(res=>res.text())
.then(res=>{
    res=JSON.parse(res);
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);

     texto.innerHTML+=`id: ${res[0].id}<br> nome: ${res[0].nome}<br> idade: ${res[0].idade}<br> patrimonio: ${res[0].patrimonio} <br><br>`;
     
     texto.innerHTML+=`id: ${res[1].id}<br> nome: ${res[1].nome}<br> idade: ${res[1].idade}<br> patrimonio: ${res[1].patrimonio} <br><br>`;

     texto.innerHTML+=`id: ${res[2].id}<br> nome: ${res[2].nome}<br> idade: ${res[2].idade}<br> patrimonio: ${res[2].patrimonio} <br><br>`;
})