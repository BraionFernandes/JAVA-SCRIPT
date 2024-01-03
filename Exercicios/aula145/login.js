class login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static endpoint="https://loginv1.braionkuro01.repl.co/";
    
    static login=(mat, pas)=>{
        this.estilocss=
            ".fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(10, 10, 10, 0.6);}"+
            ".baseLogin{display: flex; justify-content: center; align-items: center; width: 40vw; height: 30vh;}"+
            ".elementosLogin{display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; background-color: rgb(230, 230, 230); float: left; width: 45%; height: 100%; border-radius: 10px 0px 0px 10px;}"+
            ".campoLogin{display: flex; flex-direction: column; padding: 5px; font-family: Arial, Helvetica, sans-serif;}"+
            ".campoLogin>input{width: 200px; padding: 3px; border-radius: 5px; border: none; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.24);}"+
            ".botaoLogin{display: flex; align-items: center; justify-content: center; gap: 15px; padding: 5px; width: 100%;}"+
            ".botaoLogin>button{padding: 7px 15px; background-color: rgb(0, 0, 71); color: white; border: none; border-radius: 5px;}"+
            ".logoLogin{background-color: rgb(0, 0, 71); float: right; width: 55%; height: 100%; border-radius: 0px 10px 10px 0px;}"

        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","estiloLoginId")
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo);


        this.endpoint+= `?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome;
                this.acessologado=res.acesso;
            }else{
                console.log("Usuario não encontrado!");
            }
        })
    }
}

export {login}