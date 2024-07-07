function carregar() {
    var msg = window.document.getElementById('msg'); // Seleciona o elemento com o id 'msg' e armazena na variável msg
    var img = window.document.getElementById('imagem'); // Seleciona o elemento com o id 'imagem' e armazena na variável img
    var data = new Date(); // Cria um objeto Date para obter a data e hora atuais
    var hora = data.getHours(); // Obtém apenas a hora atual do objeto Date
    
    // Define o conteúdo da mensagem conforme a hora atual
    msg.innerHTML = `Agora são ${hora} horas.`;

    // Condições para definir a imagem e a cor de fundo do corpo da página de acordo com a hora do dia
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'; // Define a imagem 'fotomanha.png' para o elemento img
        document.body.style.background = '#e2cd9f'; // Define o fundo do corpo da página como um tom de amarelo claro
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'; // Define a imagem 'fototarde.png' para o elemento img
        document.body.style.background = '#b9846f'; // Define o fundo do corpo da página como um tom de laranja claro
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'; // Define a imagem 'fotonoite.png' para o elemento img
        document.body.style.background = '#515154'; // Define o fundo do corpo da página como um tom de cinza escuro
    }
}
