function abrir(){
    let janela = document.getElementById('janela-display')
    let body = document.getElementById('body')
    janela.style.display='block'

}

function fechar(){
    let janela = document.getElementById('janela-display')
    let body = document.getElementById('body')
    janela.style.display='none'
    body.style.backgroundColor = '#ffffff'
}