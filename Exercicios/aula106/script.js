// RegEx
let nome=new String("Braiooon Fernandes Dos Reis 2004");
let email="braionfernandes0@gmail.com";
let numero="1, 10, 100, 1000"

console.log(nome);

console.log(nome.search(/dos/i));

console.log(nome.match(/O/ig));

console.log(nome.replace(/reis/ig,"Empire"));

console.log(nome.match(/[oe]/ig));

console.log(nome.match(/[a-n|0-9]/ig));

console.log(nome.match(/\d/ig)); //Números
console.log(nome.match(/\s/ig)); //Espaços
console.log(nome.match(/\bF/ig)); //DWORD

console.log(nome.match(/o+/ig));
console.log(nome.match(/on*/ig));
console.log(numero.match(/10*/ig));
console.log(numero.match(/10?/ig));