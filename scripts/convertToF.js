function convertToF(){
    let celsius = document.getElementById('celsius').value
    let fahrenheit = parseInt(celsius) * 9/5 + 32
    let result = document.getElementById('fahrenheit').innerHTML = `Resultado:${celsius} graus Celsius são ${fahrenheit} graus Fahrenheit.`
}