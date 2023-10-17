const caixaCursos=document.querySelector("#caixa-cursos");
const cursos=["HTML","CSS","JavaScript","PHP","MySQL","ReactNative"]
const btnCursoSelecionado=document.querySelector("#btn-curso-selecionado")
const btnRemoverCurso=document.querySelector("#btn-remover-curso")
const btnAdicionarAntes=document.querySelector("#btn-adicionar-antes")
const btnAdicionarDepois=document.querySelector("#btn-adicionar-depois")
const nomeCurso=document.querySelector("#nomeCurso")

let indice=0

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })

    const comandos=document.createElement("div")
    comandos.setAttribute("class","comandos")

    novoElemento.appendChild(comandos)

    return novoElemento
}
cursos.map((el)=>{
    
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try{
        alert(`Curso selecionado: ${cursoSelecionado().innerText}`)
    }catch(ex){
        alert("Selecione um curso!")
    }
})

btnRemoverCurso.addEventListener("click",(evt)=>{
    const cs=cursoSelecionado()
    if(cs!=undefined){
        const cursoSelecionado=cs.parentNode.parentNode
        cs.remove()
    }else{
        alert("Selecione um curso!")
    }
})

btnAdicionarAntes.addEventListener("click",(evt)=>{
    if(cursoSelecionado!=undefined){
        if(nomeCurso.value!=""){
        const novoElemento=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoElemento,cursoSelecionado())
    }else{
        alert("Digite o nome do curso!")
    }
    }else{
        alert("Selecione um curso!")
    }
})

btnAdicionarDepois.addEventListener("click",(evt)=>{
    try{
        if(nomeCurso.value!=""){
        const novoElemento=criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoElemento,cursoSelecionado().nextSibling)
    }else{
        alert("Digite o nome do curso!")
    }
    }catch(ex){
        alert("Selecione um curso!")
    }
})