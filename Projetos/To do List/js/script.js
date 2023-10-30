const img_addTrf=document.querySelector("#add-trf");
const img_trfAndamento=document.querySelector("#trf-andamento");
const img_trfConcluida=document.querySelector("#trf-concluida")
const div_adicionarTarefa=document.querySelector("#adicionar-tarefa");
const div_tarefas=document.querySelector("#tarefas");
const div_tarefasConcluidas=document.querySelector("#tarefas-concluidas");
const nomeTarefa=document.querySelector("#nomeTarefa")
const btnAddTarefa=document.querySelector("#add-tarefa-botao")
const tarefasBase=document.querySelector("#tarefas-base")
const concluirTarefa=document.querySelector("#concluirTarefa")
const removerTarefa=document.querySelector("#removerTarefa")

let indice=0

const identificador=(controle,controlado)=>{
    controle.addEventListener("click",(evt)=>{
        if([...controlado.classList].length == 2){
            controlado.classList.remove("c2")
        }else{
            controlado.setAttribute("class","caixa c2")
        }
    })
}
identificador(img_addTrf,div_adicionarTarefa)
identificador(img_trfAndamento,div_tarefas)
identificador(img_trfConcluida,div_tarefasConcluidas)

const tirarSelecao=()=>{
    const tarefasSelecionadas=[...document.querySelectorAll(".selecionado")]
    tarefasSelecionadas.map((el)=>{
        el.classList.remove("selecionado")
    })
}
const criarTarefa=(curso)=>{
    const novoElemento=document.createElement("p")
    novoElemento.setAttribute("class","tarefa t"+indice)
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}
btnAddTarefa.addEventListener("click",(evt)=>{
    if(nomeTarefa.value != ""){
        const novoElemento=criarTarefa(nomeTarefa.value)
        div_tarefas.appendChild(novoElemento)
        indice++
    }else{
        alert("Digite o nome da tarefa para adiciona-la!")
    }
})
const tarefaSelecionada=()=>{
    const tarefasSelecionadas=[...document.querySelectorAll(".selecionado")]
    return tarefasSelecionadas[0]
}
removerTarefa.addEventListener("click",(evt)=>{
    const tc=tarefaSelecionada()
    if(tc!=undefined){
        tc.remove()
    }else{
        alert("Selecione uma tarefa para conseguir remover!")
    }
})
concluirTarefa.addEventListener("click",(evt)=>{
    const tc=tarefaSelecionada()
    if(tc!=undefined){
        div_tarefasConcluidas.appendChild(tc)
        tc.removeAttribute("class","selecionado")
        tc.setAttribute("class","tarefaConcluida")
    }
    
})