let inputDatos = document.querySelector(".input")
let btnAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class Item{
    constructor(newTarea){
        this.crearDiv(newTarea)
    }

    crearDiv(newTarea){
        // Creacion de Input
        let inputItem = document.createElement("input")
        inputItem.setAttribute("type", "text")
        inputItem.setAttribute("value" , newTarea)
        inputItem.disabled = true
        inputItem.classList.add("item-input")

        // Creacion del Div
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")

        //Boton Editar
        let botonEditar = document.createElement("button")
        botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
        botonEditar.classList.add("boton-editar")

        //Boton Remover
        let botonRemover = document.createElement("button")
        botonRemover.innerHTML = '<i class="fas fa-trash"></i>'
        botonRemover.classList.add("boton-remover")

        // Agergar los elementos al div Container
        newDiv.appendChild(inputItem)
        newDiv.appendChild(botonEditar)
        newDiv.appendChild(botonRemover)
        container.appendChild(newDiv)

        // Funcionalidad Boton Editar
        botonEditar.addEventListener("click", function(){
            if(!(inputItem.disabled)){
                botonEditar.innerHTML = '<i class="fas fa-lock"></i>'
                inputItem.disabled = true
            }
            else{
                botonEditar.innerHTML = '<i class="fas fa-lock-open"></i>'
                inputItem.disabled = false

            }
        })

        // Funcionalidad Boton Remover
        botonRemover.addEventListener("click",function(){
            newDiv.remove()
        })
    }
}

btnAgregar.addEventListener("click", function(){
    chequearInput()
})


function chequearInput(){
    if(inputDatos.value){
        new Item(inputDatos.value)
        inputDatos.value = ""
    }
}