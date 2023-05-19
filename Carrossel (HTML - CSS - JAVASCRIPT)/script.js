let direita = document.getElementById('r')
let esquerda = document.getElementById('l')
let imagens = ['1', '2', '3']
let imagemAtual = document.getElementById('img')
let count = 1

function right() {
    count++
    if (count > imagens.length - 1) {
        count = 0
    }

    imagemAtual.src = `midias/${imagens[count]}.jpg`
}

function left() {
    count--
    if (count < 0) {
        count = imagens.length - 1
    }

    imagemAtual.src = `midias/${imagens[count]}.jpg`
}