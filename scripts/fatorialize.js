function fatorialize(){
    let res = 1
    let num = document.getElementById('fatorar').value
    num = parseInt(num)
    for (let i = 1;i <= num; i++){
        res *= i
    }
    let result = document.getElementById('fatorado')
    result.innerHTML = `Resultado: ${res}`
}