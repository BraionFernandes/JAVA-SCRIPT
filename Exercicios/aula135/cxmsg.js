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
        console.log(this.texto)
    }
    ocultar=()=>{
        
    }
}