//-------------------- ARRAY --------------------//

// A ordem dos comandos influencia nos resultados.

let num = [5, 8, 2, 9, 3];  // Criação do array 'num' com os valores 5, 8, 2, 9, 3
num.sort();                // Ordena o array 'num' em ordem crescente: [2, 3, 5, 8, 9]
num.push(1);               // Adiciona o valor 1 ao final do array 'num': [2, 3, 5, 8, 9, 1]
console.log(num);          // Imprime o array 'num' no console: [2, 3, 5, 8, 9, 1]
console.log(`O vetor tem ${num.length} posições`);  // Imprime a quantidade de elementos no array 'num'
console.log(`O primeiro valor do vetor é ${num[0]}`);  // Imprime o primeiro valor do array 'num'
