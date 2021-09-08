let colors = []
let pickedColor 
let numberOfSquares = 6
// Html 
let square = document.querySelectorAll(".square")
let message = document.querySelector("#message")
let h1 = document.querySelector("h1")
let colorDisplay = document.querySelector("#colorDisplay")
let reseteo = document.querySelector("#reset")
let botones = document.querySelectorAll(".botones")

init()
// FUNCIONES IMPORTANTES

// Funcion para inicio de la pagina 
function init(){
    btnClaseAdd()
    estadoSquare()
    reset()
}
// Funcion para la Clase de los botones
function btnClaseAdd(){
    for(let i = 0; i < botones.length; i++){
       botones[i].addEventListener("click",function(){
           botones[0].classList.remove("selected")
           botones[1].classList.remove("selected")
           this.classList.add("selected")
           numberOfSquares = (this.textContent==="Easy") ? 3 : 6
           reset()
       })
    }
}

// Funcion juego cuadrados
function estadoSquare(){
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener("click",function(){
            clickedColor = square[i].style.backgroundColor
            if(clickedColor != pickedColor){
                square[i].style.backgroundColor = "#232323"
                message.textContent = "Try Again"
            }
            else{
                message.textContent = "Correct!"
                h1.style.backgroundColor = pickedColor
                changeColors(pickedColor)
                reseteo.textContent = "Play again?"   
            }
        })
    }
}

// Funcion de Reseteo
function reset(){
    colors = generateRandomColors(numberOfSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for(let i = 0; i < square.length; i++){
        // Easy y Hard mode cantidad de colores
        if(colors[i]){
            square[i].style.backgroundColor = colors[i]
            square[i].style.display = "block"
        }
        else{
            square[i].style.display = "none"
        }
    }
    reseteo.textContent = "New Colors"
    h1.style.background = "steelblue"
    message.textContent = ""

}

// Evento del boton reset
reseteo.addEventListener("click", function(){
    reset()
})

// FUNCIONES SECUNDARIAS

// Cambia los colores de los cuadrados
function changeColors(color){
    for (let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = color   
    }
}

// Elije color ganador
function pickColor(){
    randomColor = Math.floor(Math.random() * ((colors.length) - 0) + 0)
    return colors[randomColor]
}

// Generador de colores random
function randomColore(){
    
    rgbUno = Math.floor(Math.random() * (256 - 0) + 0)
    rgbDos = Math.floor(Math.random() * (256 - 0) + 0)
    rgbTres = Math.floor(Math.random() * (256 - 0) + 0)

    rgbRandom = `rgb(${rgbUno}, ${rgbDos}, ${rgbTres})`

    return rgbRandom
}

// Hace el arreglo de colores
function generateRandomColors(num){
    colorArray = []

    for(let i = 0; i < num; i++){
        
        colorArray.unshift(randomColore())
    }
    return colorArray
}

