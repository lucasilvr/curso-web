//métodos

let pessoa = {
    nome:'Lucas',
    idade: 22,
    dizerOla(){
        console.log('Ola ' + this.nome);

    }
}
pessoa.dizerOla(); // Olá

function somar(a, b) {
    return a + b;
}

let operacaoSoma = somar
operacaoSoma(9,5) // 14

//função nomeada
function dizerOla(){
    console.log('Olá, mundo!');
}

//função anônima
let dizerOlaAnonima = function() {
    console.log('Olá, mundo!');
}

dizerOlaAnonima(); // Olá, mundo!

pessoa.dizerOla = dizerOla;
pessoa.dizerOla(); // Olá Lucas

//função de seta (arrow function)
let dizerOlaSeta = () => {
    console.log('Olá, mundo!');
}
dizerOlaSeta(); // Olá, mundo!

let multiplicar = (a, b) => {
    return a * b;
}

// Outra forma de escrever a função de multiplicação usando arrow function
//let multiplicar = (a, b) => a * b;

multiplicar(5, 3) // 15

// Função de seta com APENAS UM parâmetro
let dizerNome = nome => 'Ola ' + nome;
dizerNome('Lucas'); // Olá Lucas