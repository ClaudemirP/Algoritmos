function reverseString(){
    let str = document.getElementById('invertString').value
    string = str.split('').reverse().join('')
    let result = document.getElementById('inverter')
    result.innerHTML = `Resultado: ${string}`
}