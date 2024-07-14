//-------------------- ARRAY --------------------//

// A ordem dos comandos influencia nos resultados.

let num = [5, 8, 2, 9, 3];  // Criação do array 'num' com os valores 5, 8, 2, 9, 3
num.push(1);               // Adiciona o valor 1 ao final do array 'num': [5, 8, 2, 9, 3, 1]
num.sort();                // Ordena o array 'num' em ordem crescente: [1, 2, 3, 5, 8, 9]
console.log(num);          // Imprime o array 'num' no console: [1, 2, 3, 5, 8, 9]
console.log(`O vetor tem ${num.length} posições`);  // Imprime a quantidade de elementos no array 'num'
console.log(`O primeiro valor do vetor é ${num[0]}`);  // Imprime o primeiro valor do array 'num'

let pos = num.indexOf(4);  // Procura o valor 4 no array 'num'
if (pos == -1) {           // Verifica se o valor 4 não foi encontrado
    console.log('O valor não foi encontrado!');
} else {                   // Caso contrário, imprime a posição do valor 4 no array
    console.log(`O valor 4 está na posição ${pos}`);
}
