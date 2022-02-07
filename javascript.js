function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var hora = prompt('Que horas são? (De 0-24)')    
    /*var data = new Date()
    var hora = data.getHours()*/
    var cor = document.getElementsByTagName('body')[0]
    if (hora == 1 || hora == 13) {
        msg.innerHTML = `<p> Agora é ${hora} horas</p>`
    } else {
        msg.innerHTML = `<p> Agora são ${hora} horas</p>`
    }
    if (hora <= 5 && hora > 0) {
        // boa madrugada
        img.src = "../ex014/imagens/madrugada.png"
        cor.style.background = '#0D0D0D'
    } else if (hora <= 12 && hora > 0) {
        // bom dia
        img.src = '../ex014/imagens/manha.png'
        cor.style.background = '#F2A285'
    } else if (hora <= 18 && hora > 0) {
        // boa tarde
        img.src = '../ex014/imagens/tarde.png'
        cor.style.background = '#A66A65'
    } else if (hora <= 24 && hora > 0) {
        // boa noite
        img.src = '../ex014/imagens/noite.png'
        cor.style.background = '#3B5459'
    }
}