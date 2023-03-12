function carregar(){
    var img = document.getElementById("foto")
    var msg = document.getElementById("bloco")

    var n1 =  Number(prompt("Digite a 1° nota: "))
    var n2 =  Number(prompt("Digite a 2° nota: "))
    var n3 =  Number(prompt("Digite a 2° nota: "))

    var nota = (n1+n2+n3)/3
    var media = nota.toFixed(2)

    if (media >=6){
        img.src = 'imagens/emojifesta22.png'
        msg.innerHTML = `Sua média foi <strong>${media}</strong> e você está: <strong>APROVADO!</strong>`
        document.body.style.background = "green"
    }else if (media >=5 && media <=5.99) {
        img.src = 'imagens/emojineutro2.png'
        msg.innerHTML = `Sua média foi <strong>${media}</strong> e você está de <strong>recuperação!</strong>`
        document.body.style.background = "#ffcf21"
    } else{
        img.src = 'imagens/emojitriste2.png'
        msg.innerHTML = `Sua média foi <strong>${media}</strong> e você está: <strong>REPROVADO!</strong>`
        document.body.style.background = "red"

    }
}