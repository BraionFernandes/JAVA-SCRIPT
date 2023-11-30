const ctx = document.getElementById('grafico');

let labels=["Disponibilidade","Qualidade","Performance"]
let valores=[]

  let grafico=new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        data: valores,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

    const obterDados=()=>{
        fetch("https://aula128.braionkuro01.repl.co/")
        .then(res => res.json())
        .then(res => {
            console.log(res)
            valores[0]=res.disponibilidade
            valores[1]=res.qualidade
            valores[2]=res.performance
            grafico.update()
        })
    }
    let intervalo=setInterval(obterDados,3000)