const long=document.getElementById("long");
const lati=document.getElementById("lati");

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(local,localError)
}else{
    console.log("Geolocalização não suportada!")
}

function local(position){
    long.innerHTML=position.coords.longitude
    lati.innerHTML=position.coords.latitude
}

function localError(){
    console.log("Erro ao obter a localização!")
}