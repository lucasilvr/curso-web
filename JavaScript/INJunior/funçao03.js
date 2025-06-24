//função callback
function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcular(a, b, operacao) {
    return operacao(a, b);
}

console.log(calcular(10, 5, multiplicar)); // 50, passando a função multiplicar como callback
console.log(calcular(6, 2, function(a, b) {
    return a - b
})); // 4, passando uma função anônima como callback

//forEach - função de callback
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero, indice, array) { //não precisa usar todos os parâmetros, mas é uma boa prática
    console.log(`Número: ${numero}, Índice: ${indice}, Array de numeros: ${array}`); 
}); // Itera sobre cada elemento do array e executa a função de callback

numeros.forEach((numero) => {
    console.log(numero + 1);
}); // Usando arrow function para incrementar cada número do array

// Exemplo de uso de callback com objetos
const personagens = [
    { nivel: 42, nome: 'Gandalf', classe: 'Mago' },
    { nivel: 28, nome: 'Aragorn', classe: 'Guerreiro' },
    { nivel: 35, nome: 'Legolas', classe: 'Elfo' },
    { nivel: 30, nome: 'Gimli', classe: 'Anão'  },
]

//map - percorre o array e retorna um novo array com os resultados da função de callback
let nomes = personagens.map(personagem => {
    return personagem.nome;
});

console.log(nomes); // ['Gandalf', 'Aragorn', 'Legolas', 'Gimli']

//filter - filtra o array com base na condição definida na função de callback. elemento, indice e/ou array
let guerreiros = personagens.filter(personagem =>  personagem.classe === 'Guerreiro')

console.log(guerreiros); // [{ nivel: 28, nome: 'Aragorn', classe: 'Guerreiro' }]

//sort - ordena o array com base na função de callback
let personagensOrdenados = personagens.slice().sort((a, b) => { //a e b são os elementos do array que estão sendo comparados, slice() cria uma cópia do array original para não modificar o array original
    return a.nivel - b.nivel; // Ordena pelo nível em ordem crescente
}); 

console.log(personagensOrdenados); // Ordena os personagens pelo nível

//reduce - reduz o array a um único valor com base na função de callback
let somaNiveis = personagens.reduce((total, personagem) => {
    return total + personagem.nivel; // Soma os níveis de todos os personagens
}, 0);

console.log(somaNiveis); // 135, soma os níveis de todos os personagens