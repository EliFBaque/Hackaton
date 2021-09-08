// HTML

let btnEnviar = document.querySelector(".btnEnviar")
let li = document.querySelectorAll("ol li")
// Funcionalidad

// Funcion request a la api
function cargarCiudad(){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916", function(data){
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").innerHTML = parseFloat(data.main["temp"] - 273.15).toFixed(1) + "<sup>°C</sup>" 
        document.querySelector("#descripcion") .textContent = data.weather[0].description
        document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png") 
    })
    .fail(function(){
        alert("La ciudad ingresada es inexistente")
    })
}

// Evento del boton de enviar

btnEnviar.addEventListener("click", function(){
    if(document.querySelector("input").value){
        ciudad = document.querySelector("input").value
        cargarCiudad()
        document.querySelector(".container").style.visibility = "visible"
        document.querySelector("input").value = ""
    }
    else{
       alert("Por favor ingresar una Ciudad") 
    }
})