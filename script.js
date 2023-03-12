function carregar(){
    var img = document.getElementById("foto")
    var msg = document.getElementById("bloco")
    var nota = Number(prompt("Digite sua nota de 0 a 10: "))
    if (nota >=6){
        img.src = 'imagens/emojifesta22.png'
        msg.innerHTML = `Sua nota foi <strong>${nota}</strong> e você está: <strong>APROVADO!</strong>`
        document.body.style.background = "green"
    }else if (nota >=5 && nota <=5.9) {
        img.src = 'imagens/emojineutro2.png'
        msg.innerHTML = `Sua nota foi <strong>${nota}</strong> e você está de <strong>recuperação!</strong>`
        document.body.style.background = "#ffcf21"
    } else{
        img.src = 'imagens/emojitriste2.png'
        msg.innerHTML = `Sua nota foi <strong>${nota}</strong> e você está: <strong>REPROVADO!</strong>`
        document.body.style.background = "red"

    }
}