const mais=document.querySelector("#mais")
const menos=document.querySelector("#menos")
const vezes=document.querySelector("#vezes")
const divi=document.querySelector("#divi")
const resut=document.querySelector("#result-p")
let valores=[]
numeros=()=>{
    let n1=Number(document.getElementById("n1").value)
        let n2=Number(document.getElementById("n2").value)
        valores=[n1,n2]
}
const op=[
    ()=>{
        numeros()
        return valores[0]+valores[1]
    },
    ()=>{
        numeros()
        return valores[0]-valores[1]
    },
    ()=>{
        numeros()
        return valores[0]*valores[1]
    },
    ()=>{
        numeros()
        return valores[0]/valores[1]
    },
]
mais.addEventListener("click",()=>{
    resut.innerHTML=op[0]()
})
menos.addEventListener("click",()=>{
    resut.innerHTML=op[1]()
})
vezes.addEventListener("click",()=>{
    resut.innerHTML=op[2]()
})
divi.addEventListener("click",()=>{
    resut.innerHTML=op[3]()
})