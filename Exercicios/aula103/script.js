let nome=new String("Braion Fernandes Dos Reis");
let nome2=new String("Braion Fernandes Dos Reis");
let empresa="Empire Corp.";

console.log(nome);
console.log(typeof(nome));

console.log(nome.charAt(0));
console.log(nome.charAt(1));

console.log(nome.charCodeAt(0));

console.log(nome.concat());

console.log(empresa.indexOf("p"));

console.log(empresa.lastIndexOf("p"));

console.log(nome.localeCompare(nome2));

console.log(nome.replace("B","P"));

console.log(nome.search("Dos"));

let sobrenome=(nome.slice(0,7));
console.log(sobrenome);

let arnome=nome.split(" ");
console.log(arnome);

