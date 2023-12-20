class cxMsg{
    tittle=null;
    texto=null;
    cor=null;
    destino=null;
    divMsg=null;
    constructor(config){
        this.cor=config.cor;
        this.destino=document.body;
    }
    mostrar=(tittle,texto)=>{
        this.tittle=tittle;
        this.texto=texto;
        this.divMsg=document.createElement("div")
        const estilo_divMsg=
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0, 0, 0, 0.7);";
        this.divMsg.setAttribute("id","divMsg")
        this.divMsg.setAttribute("style",estilo_divMsg)
        this.destino.prepend(this.divMsg)

        const estilo_caixaMsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;"
        const caixaMsg=document.createElement("div")
        caixaMsg.setAttribute("style",estilo_caixaMsg)
        this.divMsg.appendChild(caixaMsg)

        const estilo_tituloCaixa=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        const tituloCaixa=document.createElement("div")
        tituloCaixa.setAttribute("style",estilo_tituloCaixa)
        tituloCaixa.innerHTML=this.tittle
        caixaMsg.appendChild(tituloCaixa)

        const estilo_corpoCaixa=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #eee;"+
            "color: #000;"+
            "padding: 30px 5px;"
        const corpoCaixa=document.createElement("div")
        corpoCaixa.setAttribute("style",estilo_corpoCaixa)
        corpoCaixa.innerHTML=this.texto
        caixaMsg.appendChild(corpoCaixa)

        const estilo_rodapeCaixa=
            "display: flex;"+
            "justify-content: space-around;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: #ccc;"+
            "color: #000;"+
            "padding: 5px;"+
            "border-radius: 0px 0px 5px 5px;"
        const rodapeCaixa=document.createElement("div")
        rodapeCaixa.setAttribute("style",estilo_rodapeCaixa)
        caixaMsg.appendChild(rodapeCaixa)

        const estilo_btnOk=
            "background-color: "+this.cor+";"+
            "color: #fff;"+
            "padding: 10px 50px;"+
            "border: none;"+
            "border-radius: 5px;"+
            "cursor: pointer;"+
            "text-transform: uppercase;"
        const btnOk=document.createElement("button")
        btnOk.setAttribute("style",estilo_btnOk)
        btnOk.innerHTML="OK"
        btnOk.addEventListener("click",()=>{
            this.ocultar()
        })
        rodapeCaixa.appendChild(btnOk)
    }
    ocultar=()=>{
        this.divMsg.remove()
    }
}