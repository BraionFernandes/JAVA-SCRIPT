let expressao = '';

function concatenar(valor) {
    expressao += valor;
    document.getElementById('display').value = expressao;
}

function limpar(){
    expressao = '';
    document.getElementById('display').value = '';
}

function calcular(){
    try {
        const resultado = eval(expressao);
        document.getElementById('display').value = resultado;
        expressao = resultado.toString();
    }   catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}
