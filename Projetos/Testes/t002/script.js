const text = document.getElementById('text');

function enviar(){
    text.innerHTML = ''
    const num = Number(document.getElementById('num').value);
    for(let n = 1; n <= 20; n++){
        text.innerHTML += `<p>${num} x ${n} = ${num * n}</p>`;
    }
}