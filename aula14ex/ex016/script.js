function contar() {
    // Obtém os elementos de entrada e saída do HTML
    let ini = document.getElementById('txti'); // Campo de início da contagem
    let fim = document.getElementById('txtf'); // Campo de fim da contagem
    let passo = document.getElementById('txtp'); // Campo de passo da contagem
    let res = document.getElementById('res'); // Elemento onde será exibida a contagem

    // Verifica se algum dos campos está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'; // Exibe mensagem de erro se faltar algum dado
        // window.alert('[ERRO] Faltam dados!') // Alerta opcional (comentado)
    } else {
        res.innerHTML = 'Contando: <br>'; // Inicia a mensagem de contagem

        // Converte os valores dos campos de texto para números
        let i = Number(ini.value); // Valor inicial da contagem
        let f = Number(fim.value); // Valor final da contagem
        let p = Number(passo.value); // Passo da contagem

        // Verifica se o passo é menor ou igual a zero
        if (p <= 0 ) {
            window.alert('Passo inválido! Considerando PASSO 1'); // Alerta se o passo for inválido
            p = 1; // Define o passo como 1 (valor padrão)
        }

        // Verifica se é uma contagem crescente ou decrescente
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`; // Adiciona cada número da contagem com um emoji de seta para a direita
            }
        } else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`; // Adiciona cada número da contagem com um emoji de seta para a direita
            }
        }

        res.innerHTML += `\u{1F3C1}`; // Adiciona um emoji de bandeira no final da contagem
    }
}
