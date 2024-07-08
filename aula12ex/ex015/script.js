function verificar() {
    var data = new Date(); // Obtém a data atual
    var ano = data.getFullYear(); // Obtém o ano atual
    var fano = window.document.getElementById('txtano'); // Obtém o elemento de entrada do ano de nascimento
    var res = window.document.querySelector('div#res'); // Obtém o elemento <div> onde o resultado será exibido

    // Verifica se o campo de ano de nascimento está vazio ou se o valor inserido é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = window.document.getElementsByName('radsex'); // Obtém os elementos do tipo radio com o name 'radsex'

        var idade = ano - Number(fano.value); // Calcula a idade subtraindo o ano atual pelo ano de nascimento
        var gênero = ''; // Variável para armazenar o gênero identificado
        var img = window.document.createElement('img'); // Cria um elemento <img> dinamicamente
        img.setAttribute('id', 'foto'); // Define o id 'foto' para a imagem criada

        // Verifica qual opção de sexo (Masculino ou Feminino) está marcada
        if (fsex[0].checked) { // Se o primeiro radio (Masculino) estiver marcado
            gênero = 'Homem'; // Define o gênero como 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png'); // Define a imagem de bebê masculino
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png'); // Define a imagem de jovem masculino
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png'); // Define a imagem de adulto masculino
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png'); // Define a imagem de idoso masculino
            }
        } else if (fsex[1].checked) { // Se o segundo radio (Feminino) estiver marcado
            gênero = 'Mulher'; // Define o gênero como 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png'); // Define a imagem de bebê feminino
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png'); // Define a imagem de jovem feminino
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png'); // Define a imagem de adulto feminino
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png'); // Define a imagem de idoso feminino
            }
        }

        res.style.textAlign = 'center'; // Centraliza o texto no elemento <div> de resultado
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`; // Define o texto de resultado com o gênero e a idade
        res.appendChild(img); // Adiciona a imagem criada ao elemento <div> de resultado
    }
}
