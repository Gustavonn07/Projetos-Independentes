function cores(){
    let back = document.getElementById('back')
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    var cor = "rgb(" + r + ", " + g + ", " + b + ")"
    back.style.backgroundColor = cor
}