// Definição da função 'parImpar' que verifica se um número 'n' é par ou ímpar
function parImpar(n) {
    // Verifica se o número 'n' é par (resto da divisão por 2 é igual a 0)
    if (n % 2 == 0) {
        // Retorna 'PAR!' se 'n' for par
        return 'PAR!';
    } else {
        // Retorna 'IMPAR!' se 'n' for ímpar
        return 'IMPAR!';
    }
}

// JEITO MAIS FACIL DE MOSTRAR O RESULTADO
console.log(parImpar(223));  
// Chamada da função 'parImpar' com o argumento 223 para verificar se é par ou ímpar
// Saída esperada: IMPAR!



/* JEITO 1 - Atribuindo o resultado da função a uma variável e imprimindo 
let resultado = parImpar(223);  // Chama a função 'parImpar' com o argumento 223
console.log(resultado);  // Imprime o resultado (IMPAR!) no console
*/
