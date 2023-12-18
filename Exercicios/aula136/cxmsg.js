class cxMsg{
    tittle=null;
    texto=null;
    cor=null;
    destino=null;
    divMsg=null;
    constructor(config){
        this.tittle=config.tittle;
        this.texto=config.texto;
        this.cor=config.cor;
        this.destino=document.body;
    }
    mostrar=()=>{
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

        const estilo_titulocaixa=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color: "+this.cor+";"+
            "color:  #fff;"+
            "padding: 5px;"+
            "border-radius: 5px 5px 0px 0px;"
        const titulocaixa=document.createElement("div")
        titulocaixa.setAttribute("style",estilo_titulocaixa)
        titulocaixa.innerHTML=this.tittle
        caixaMsg.appendChild(titulocaixa)
    }
    ocultar=()=>{
        
    }
}