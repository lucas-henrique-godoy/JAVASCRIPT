// Definição da função fatorial que recebe um parâmetro n
function fatorial(n) {
    // Inicialização da variável fat com 1, que vai armazenar o resultado do fatorial
    let fat = 1;

    // Início do loop for, que começa com c igual a n e vai até c ser maior que 1, decrementando c a cada iteração
    for (let c = n; c > 1; c--) {
        // Multiplica fat pelo valor de c a cada iteração do loop
        fat *= c;
    }

    // Retorna o valor final do fatorial calculado
    return fat;
}

// Chamada da função fatorial com o argumento 5 e exibição do resultado no console
console.log(fatorial(5));
