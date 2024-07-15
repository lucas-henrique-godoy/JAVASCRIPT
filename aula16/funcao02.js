// Definição da função 'soma' que recebe dois parâmetros 'n1' e 'n2', com valores padrão de 0 caso não sejam fornecidos
function soma(n1=0, n2=0) {
    // Retorna a soma dos dois parâmetros 'n1' e 'n2'
    return n1 + n2;
}

// Chamada da função 'soma' com o argumento 7 para 'n1' e usando o valor padrão 0 para 'n2'
console.log(soma(7));  // Saída esperada: 7 (pois 7 + 0 = 7)


/*

******  Explicação Detalhada:
Definição da Função:

function soma(n1=0, n2=0) { ... }: Define uma função chamada soma que recebe dois parâmetros n1 e n2. Se nenhum valor for fornecido ao chamar a função, os parâmetros assumem o valor padrão de 0.
Retorno da Função:

return n1 + n2;: Retorna a soma dos dois parâmetros n1 e n2.
Chamada da Função:

console.log(soma(7));: Chama a função soma passando 7 como valor para n1 e usando o valor padrão 0 para n2.
O resultado da função será 7, pois 7 + 0 é igual a 7.
Este código JavaScript simplesmente define uma função soma que calcula a soma de dois números e demonstra seu uso chamando-a com um argumento (7) para n1 e usando o valor padrão (0) para n2. O resultado é então impresso no console.
*/