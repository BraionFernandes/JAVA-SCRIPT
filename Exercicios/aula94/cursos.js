const cursos=["PHP","C#","HTML","CSS","JavaScript","Python"]

export default function getTodosCursos(){
    return cursos
}

function getCurso(i){
    return cursos[i]
}

export {cursos,getCurso}