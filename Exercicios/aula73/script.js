const display=document.querySelector("#display")
const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const res=document.querySelector(".res")
const CE=document.querySelector("#CE")
const copy=document.querySelector("#copy")
const text=document.getElementById("teste")

let sinal=false
let decimal=false

CE.addEventListener("click",()=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})
teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
        if(evt.target.innerHTML=="."){
            if(!decimal){
                decimal=true
                if(display.innerHTML=="0"){
                    display.innerHTML+="."
                }else{
                    display.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})
teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal=true
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            if(evt.target.innerHTML=="x"){
                display.innerHTML+="*"
            }else{
                display.innerHTML+=evt.target.innerHTML
            }
        }
    })
})
res.addEventListener("click",()=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})
copy.addEventListener("click",(evt)=>{
    //navigator.clipboard.writeText(display.innerHTML)
    teste.select()
    navigator.clipboard.writeText(teste.value)
})