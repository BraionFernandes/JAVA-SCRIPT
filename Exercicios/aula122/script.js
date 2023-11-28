const endpoint="https://braionfernandes.braionkuro01.repl.co/"
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})