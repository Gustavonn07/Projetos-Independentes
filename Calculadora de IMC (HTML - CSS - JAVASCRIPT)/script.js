function calcular(){
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)
    let calc = document.getElementById('resp')
    let imc = peso/altura**2
    calc.innerText = (`Seu IMC: ${imc.toFixed(2)}`)
}