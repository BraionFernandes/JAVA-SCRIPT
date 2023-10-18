const img_addTrf=document.querySelector("#add-trf");
const img_rmvTrf=document.querySelector("#rmv-trf");
const img_trfAndamento=document.querySelector("#trf-andamento");
const img_trfConcluida=document.querySelector("#trf-concluida")
const div_adicionarTarefa=document.querySelector("#adicionar-tarefa");
const div_removerTarefa=document.querySelector("#remover-tarefa");
const div_tarefas=document.querySelector("#tarefas");
const div_tarefasConcluidas=document.querySelector("#tarefas-concluidas");

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
identificador(img_rmvTrf,div_removerTarefa)
identificador(img_trfAndamento,div_tarefas)
identificador(img_trfConcluida,div_tarefasConcluidas)