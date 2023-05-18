let valor = 0
let local = document.getElementById('valor')


function aumentar(){
    let incremento = 1
    valor += incremento
    if(valor > 0){
        local.style.color = 'green'
        local.innerText = `${valor}`
    }
    else if(valor < 0){
        local.style.color = 'red'
        local.innerText = `${valor}`
    }
    else{
        local.style.color = 'white'
        local.innerText = `${valor}`
    }
}

function diminuir(){
    let incremento = -1
    valor += incremento
    if(valor > 0){
        local.style.color = 'green'
        local.innerText = `${valor}`
    }
    else if(valor < 0){
        local.style.color = 'red'
        local.innerText = `${valor}`
    }
    else{
        local.style.color = 'white'
        local.innerText = `${valor}`
    }
}

function reset(){
    valor = 0
    local.style.color = 'white'
    local.innerText = `${valor}`
}