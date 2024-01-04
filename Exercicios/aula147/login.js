class login{
    static logado=false;
    static matlogado=null;
    static nomelogado=null;
    static acessologado=null;
    static estilocss=null;
    static config={
        cor:"000047",
        img:"./logo.png"
    }
    static endpoint="https://loginv1.braionkuro01.repl.co/";
    
    static login=(config=null)=>{
        if(config!=null){
            this.config=config;
        }
        
        this.estilocss=
            ".fundoLogin{display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: rgba(10, 10, 10, 0.6);}"+
            ".baseLogin{display: flex; justify-content: center; align-items: center; width: 35vw; height: 30vh;}"+
            ".elementosLogin{display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start; background-color: rgb(230, 230, 230); float: left; width: 50%; height: 100%; border-radius: 10px 0px 0px 10px;}"+
            ".campoLogin{display: flex; flex-direction: column; padding: 10px; font-family: Arial, Helvetica, sans-serif;}"+
            ".campoLogin>input{width: 200px; padding: 3px; border-radius: 5px; border: none; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.24);}"+
            ".botaoLogin{display: flex; align-items: center; justify-content: center; gap: 15px; padding: 5px; width: 100%;}"+
            `.botaoLogin>button{padding: 7px 15px; background-color: #${this.config.cor}; color: white; border: none; border-radius: 5px;}`+
            ".logoLogin{background-color: rgb(0, 0, 71); float: right; width: 50%; height: 100%; border-radius: 0px 10px 10px 0px;}"

        const styleEstilo=document.createElement("style");
        styleEstilo.setAttribute("id","estiloLoginId")
        styleEstilo.setAttribute("rel","stylesheet");
        styleEstilo.setAttribute("type","text/css");
        styleEstilo.innerHTML=this.estilocss;
        document.head.appendChild(styleEstilo);

        const fundoLogin=document.createElement("div");
        fundoLogin.setAttribute("id","fundoLogin");
        fundoLogin.setAttribute("class","fundoLogin");
        document.body.prepend(fundoLogin);

        const baseLogin=document.createElement("div");
        baseLogin.setAttribute("id","baseLogin");
        baseLogin.setAttribute("class","baseLogin");
        fundoLogin.appendChild(baseLogin);

        const elementosLogin=document.createElement("div");
        elementosLogin.setAttribute("id","elementosLogin");
        elementosLogin.setAttribute("class","elementosLogin");
        baseLogin.appendChild(elementosLogin);

        const campoLoginUser=document.createElement("div");
        campoLoginUser.setAttribute("id","campoLoginUser");
        campoLoginUser.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginUser);

        const labelUser=document.createElement("label");
        labelUser.innerHTML="Name"
        campoLoginUser.appendChild(labelUser);

        const inputUser=document.createElement("input");
        inputUser.setAttribute("type","text");
        inputUser.setAttribute("name","username");
        inputUser.setAttribute("id","username");
        campoLoginUser.appendChild(inputUser);

        const campoLoginPass=document.createElement("div");
        campoLoginPass.setAttribute("id","campoLoginPass");
        campoLoginPass.setAttribute("class","campoLogin");
        elementosLogin.appendChild(campoLoginPass);

        const labelPass=document.createElement("label");
        labelPass.innerHTML="Senha"
        campoLoginPass.appendChild(labelPass);

        const inputPass=document.createElement("input");
        inputPass.setAttribute("type","password");
        inputPass.setAttribute("name","senha");
        inputPass.setAttribute("id","senha");
        campoLoginPass.appendChild(inputPass);

        const botaoLogin=document.createElement("div");
        botaoLogin.setAttribute("class","botaoLogin");
        elementosLogin.appendChild(botaoLogin);

        const btnLogin=document.createElement("button");
        btnLogin.setAttribute("class","btnLogin");
        btnLogin.innerHTML="Entrar";
        btnLogin.addEventListener("click",()=>{
            if(this.verifLogin()){
                this.fechar();
            }else{

            }
        })
        botaoLogin.appendChild(btnLogin);

        const btnCancelar=document.createElement("button");
        btnCancelar.setAttribute("class","btnCancelar");
        btnCancelar.innerHTML="Cancelar";
        btnCancelar.addEventListener("click",()=>{
            this.fechar();
        })
        botaoLogin.appendChild(btnCancelar);

        const logoLogin=document.createElement("div");
        logoLogin.setAttribute("id","logoLogin");
        logoLogin.setAttribute("class","logoLogin");
        baseLogin.appendChild(logoLogin);

        // this.endpoint+= `?matricula=${mat}&senha=${pas}`;
        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado=true;
        //         this.matlogado=mat;
        //         this.nomelogado=res.nome;
        //         this.acessologado=res.acesso;
        //     }else{
        //         console.log("Usuario não encontrado!");
        //     }
        // })
    }

    static verifLogin=()=>{
        const mat=document.querySelector("#username").value;
        const pas=document.querySelector("#senha").value;
        if(mat=="123" && pas=="123"){
            return true;
        }else{
            return false;
        }
    }

    static fechar=()=>{
        const fundoLogin=document.querySelector("#fundoLogin");
        fundoLogin.remove();
        const estiloLoginId=document.querySelector("#estiloLoginId");
        estiloLoginId.remove();
        fundoLogin
    }
}

export {login}