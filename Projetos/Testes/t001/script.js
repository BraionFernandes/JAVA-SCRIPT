    let text = document.getElementById('resut');

function enviar(){
    text.innerHTML = ''
    const valores = [];
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let n4 = Number(document.getElementById('n4').value);
    valores.push(n1, n2, n3, n4);

    text.innerHTML += `<p>Primeiro Bimestre nota: ${valores[0]}</p>`
    text.innerHTML += `<p>Segundo Bimestre nota: ${valores[1]}</p>`
    text.innerHTML += `<p>Terceiro Bimestre nota: ${valores[2]}</p>`
    text.innerHTML += `<p>Quarto Bimestre nota: ${valores[3]}</p>`
    text.innerHTML += `<p>${calcular(n1, n2, n3, n4).toFixed(1)}</p>`
}

function calcular(n1, n2, n3 , n4){
    const notaf = (n1 + n2 + n3 + n4) / 4
    return notaf
}