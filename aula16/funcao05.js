// RECURSIVIDADE: a recursividade é um conceito fundamental na programação e na matemática, onde uma função ou procedimento se chama a si mesmo diretamente ou através de uma cadeia de chamadas. Em termos simples, é como se uma função fosse capaz de se "autochamar" para resolver um problema de maneira iterativa.


// Função 'fatorial' que calcula o fatorial de um número 'n' usando recursividade
function fatorial(n) {
    // Caso base: se 'n' for igual a 1, retorna 1 (definição de fatorial de 1 é 1)
    if (n == 1) {
        return 1;
    } else {
        // Caso recursivo: retorna 'n' multiplicado pelo fatorial de 'n - 1'
        return n * fatorial(n - 1);
    }
}

// Chamada da função 'fatorial' passando o argumento 5 e imprimindo o resultado no console
console.log(fatorial(5));  // Saída esperada: 120 (pois 5! = 5 x 4 x 3 x 2 x 1 = 120)

/*
Comentário para explicar o conceito de recursividade e fatorial:

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

n! = n x (n - 1)

1! = 1
*/
