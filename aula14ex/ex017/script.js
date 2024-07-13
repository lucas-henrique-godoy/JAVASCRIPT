function tabuada() {
    let num = document.getElementById('txtn'); // Obtém o elemento de entrada para o número
    let tab = document.getElementById('seltab'); // Obtém o elemento select onde será exibida a tabuada

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!'); // Exibe alerta se o campo estiver vazio
    } else {
        let n = Number(num.value); // Converte o valor do campo para número
        let c = 1; // Inicializa o contador para gerar a tabuada

        tab.innerHTML = ''; // Limpa o conteúdo atual do select

        // Loop para gerar as opções da tabuada
        while (c <= 10) {
            let item = document.createElement('option'); // Cria um elemento option para cada linha da tabuada
            item.text = `${n} X ${c} = ${n * c}`; // Define o texto de cada option com a tabuada
            item.value = `tab${c}`; // Define o valor de cada option (opcional neste caso)
            tab.appendChild(item); // Adiciona o option ao select
            c++; // Incrementa o contador para passar para o próximo número da tabuada
        }
    }
}
