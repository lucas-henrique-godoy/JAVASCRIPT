let valores = [8, 1, 7, 4, 2, 9]

//console.log(valores) FORMA PADRÃO
/*
console.log(valores[0])  Modo BURRO DE FAZER ISSO
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/


//MODO TRADICIONAL DE PERCURSO EM VETORES - FORMA PERSONALIZADA: Aqui é possível formatar a saída.

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}