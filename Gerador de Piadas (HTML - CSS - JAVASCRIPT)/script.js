function randmizer(){
    let valor = Math.trunc(Math.random()*10)
    let piada = document.getElementById('piada')
    if(valor <= 3){
        piada.innerHTML = 'O que o pato disse para a pata? \nVem Quá'
    }

    else if(valor <=6 && valor > 3){
        piada.innerHTML = 'Por que o menino estava falando ao telefone deitado? \nR.: Para não cair a ligação.'
    }
    else{
        piada.innerHTML = 'Qual é a fórmula da água benta? \nR.: H Deus O!'
    }
}