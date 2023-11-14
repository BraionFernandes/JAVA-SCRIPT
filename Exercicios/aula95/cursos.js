class Cursos{
    static cursos=["PHP","C#","HTML","CSS","JavaScript","Python"]
    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCursos=(i)=>{
        return this.cursos[i]
    }

    static addCurso=(novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos=()=>{
        this.cursos=[]
    }
}

export default Cursos
