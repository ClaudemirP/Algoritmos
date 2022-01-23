function findLongestWord(){
    let res = document.getElementById('longestWord').value
    res = res.split(' ').sort((a,b) => a.length - b.length)
    document.getElementById('longest').innerHTML = `Resultado: ${res[res.length - 1]} com ${res[res.length - 1].length} letras.`
}