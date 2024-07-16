//OBEJTO

// Definição de um objeto chamado 'amigo'
let amigo = {
    nome: 'José', // Propriedade 'nome' do objeto 'amigo' com valor 'José'
    sexo: 'M',     // Propriedade 'sexo' do objeto 'amigo' com valor 'M'
    peso: 85.4,    // Propriedade 'peso' do objeto 'amigo' com valor 85.4
    
    // Método 'engordar' do objeto 'amigo', que recebe um parâmetro 'p'
    engordar(p = 0) {
        console.log('Engordou'); // Exibe uma mensagem indicando que o amigo engordou
        this.peso += p; // Incrementa o peso atual do amigo com o valor passado como parâmetro 'p'
    }
};

amigo.engordar(2); // Chamada do método 'engordar' do objeto 'amigo' com o argumento 2

// Exibe uma mensagem mostrando o nome e o peso atual do amigo
console.log(`${amigo.nome} pesa ${amigo.peso}KG`);
