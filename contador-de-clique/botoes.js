let contagem = 0

let contador = document.querySelector("#num")

function clique() {
    contagem++
    contador.innerHTML = contagem
    console.log(contagem)
}

