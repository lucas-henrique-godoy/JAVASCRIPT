let num = document.querySelector('input#fnum'); // Seleciona o input com id "fnum"
let lista = document.querySelector('select#flista'); // Seleciona o select com id "flista"
let res = document.querySelector('div#res'); // Seleciona a div com id "res"
let valores = []; // Array para armazenar os valores adicionados pelo usuário

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { // Verifica se o número está entre 1 e 100
        return true; // Retorna verdadeiro se for um número válido
    } else {
        return false; // Retorna falso se não for um número válido
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Verifica se o número já está na lista
        return true; // Retorna verdadeiro se o número já estiver na lista
    } else {
        return false; // Retorna falso se o número não estiver na lista
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // Verifica se o número é válido e não está na lista
        valores.push(Number(num.value)); // Adiciona o número convertido para número no array valores
        let item = document.createElement('option'); // Cria um novo elemento <option>
        item.text = `Valor ${num.value} adicionado.`; // Define o texto do <option>
        lista.appendChild(item); // Adiciona o <option> ao <select>
        res.innerHTML = ''; // Limpa o conteúdo anterior da div de resultados
    } else {
        window.alert('Valor inválido ou já encontrado na lista.'); // Alerta o usuário se o valor for inválido ou já estiver na lista
    }
    num.value = ''; // Limpa o valor do input
    num.focus(); // Coloca o foco de volta no input para o usuário continuar digitando
}

function finalizar() {
    if (valores.length == 0) { // Verifica se não há valores no array
        window.alert('Adicione valores antes de finalizar!'); // Alerta o usuário para adicionar valores antes de finalizar
    } else {
        let tot = valores.length; // Total de números cadastrados
        let maior = valores[0]; // Inicializa a variável para armazenar o maior valor com o primeiro elemento do array
        let menor = valores[0]; // Inicializa a variável para armazenar o menor valor com o primeiro elemento do array
        let soma = 0; // Inicializa a variável para calcular a soma dos valores
        let media = 0; // Inicializa a variável para calcular a média dos valores

        // Loop para calcular o maior, menor e soma dos valores
        for (let pos in valores) {
            soma += valores[pos]; // Soma os valores do array

            // Verifica se o valor atual é maior que o maior valor encontrado até agora
            if (valores[pos] > maior) {
                maior = valores[pos]; // Atualiza o maior valor
            }

            // Verifica se o valor atual é menor que o menor valor encontrado até agora
            if (valores[pos] < menor) {
                menor = valores[pos]; // Atualiza o menor valor
            }
        }

        media = soma / tot; // Calcula a média dos valores

        res.innerHTML = ''; // Limpa o conteúdo anterior da div de resultados
        // Adiciona os resultados na div de resultados usando +=
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`; // Explicação: Adiciona o total de números cadastrados como parágrafo à div de resultados
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`; // Explicação: Adiciona o maior valor informado como parágrafo à div de resultados
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`; // Explicação: Adiciona o menor valor informado como parágrafo à div de resultados
        res.innerHTML += `<p>Somando todos os valores temos: ${soma}.</p>`; // Explicação: Adiciona a soma de todos os valores como parágrafo à div de resultados
        res.innerHTML += `<p>A média dos valores digitados foi: ${media}.</p>`; // Explicação: Adiciona a média dos valores digitados como parágrafo à div de resultados
    }
}
