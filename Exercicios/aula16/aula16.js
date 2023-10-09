"use strict"

const objs=document.getElementsByTagName("div");

let num=[10,20,30,40,50];

for(let n of objs){
    console.log(n.innerHTML="curso");
}

for(let n in objs){
    console.log(objs[n].innerHTML);
}
/* 
for(let n=0;n<num.length;n++){
    console.log(`${num[n]}`);
}
*/