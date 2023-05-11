let msg = document.getElementById('msg')
let erro = document.getElementById('erro')
let vizu = document.getElementById('vizu')

function mensagem(){
    if(!msg.value){
        erro.innerHTML = 'ERRO. Digite algo'
    }
    else{
        vizu.innerHTML = msg.value
    }
}