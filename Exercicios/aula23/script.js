// Função Parametrizada
function soma(...valores){
    let tam= valores.length
    let res=0
    for(let v of valores){
        res+=v
    }

    return res
}

console.log(soma(100,5,2));

