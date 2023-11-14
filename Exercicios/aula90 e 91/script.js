const objetos=document.getElementById("objetos");

const computador={
    cpu:"i9",
    ram:"64gb",
    ssd:"1tb",
    info:function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`SSD: ${this.ssd}`)
    }
}
computador["monitor"]="22pol"
computador.placaVideo="3090"

const c1=Object.assign({},computador)
//c1.info()

const c2=Object.create(computador)
c2.cpu="i9"
c2.ram="8gb"
c2.ssd="1tb"
c2.info()

const o1={obj1:"1"}
const o2={obj2:"2"}
const o3={obj3:"3"}
const o4=Object.assign(o1,o2,o3)

console.log(o4)

const computadores=[
    {
        cpu:"i9",
        ram:"64gb",
        ssd:"1tb"
    },
    {
        cpu:"i7",
        ram:"32gb",
        ssd:"500gb"
    },
    {
        cpu:"i5",
        ram:"16gb",
        ssd:"250gb"
    }
]

// computador.info()
// console.log(computadores)
// objetos.innerHTML=JSON.stringify(computadores)

computadores.forEach((e)=>{
    const div=document.createElement("div")
    div.innerHTML=`CPU: ${e.cpu} <br> RAM: ${e.ram} <br> SSD: ${e.ssd}`
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})