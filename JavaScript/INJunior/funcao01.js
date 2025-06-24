function dizerOla(){
    console.log("Olá, mundo!");
}

dizerOla(); // Olá, mundo!

function dizerNome (saudacao, nome) {
    console.log(`${saudacao}, ${nome}!`);
}

dizerNome("Bom dia", "Lucas"); // Bom dia, Lucas!
dizerNome("Boa tarde", "Juliana"); // Boa tarde, Juliana!

function media(n1, n2, n3) {
    console.log((n1 + n2 + n3) / 3);
}

media(7, 8, 9); // 8

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

function saudacao2(nome = "Lucas") {
    console.log(`Olá, ${nome}!`);
}

saudacao("Lucas"); // Olá, Lucas!

saudacao(); // Olá, undefined!

saudacao2("Carlos"); // Olá, Carlos!

saudacao2(); // Olá, Lucas!

pessoa = {
    nome: 'Lucas',
    idade: 22,
    estudante: true,
    altura: 1.79,
}

function mostrarPessoa(dados) {
    console.log(`Nome: ${dados.nome}`)
    console.log(`Idade: ${dados.idade}`)
    console.log(`Estudante: ${dados.estudante}`)
    console.log(`Altura: ${dados.altura}`)
}

mostrarPessoa(pessoa)

/* 
PARâMETROS:
- Input: São os valores que a função recebe quando é chamada.
- Output: São os valores que a função retorna após ser executada.
- Parâmetros são definidos na declaração da função, enquanto os argumentos são os valores passados quando a função é chamada.
- Parâmetros podem ter valores padrão, como no caso de `saudacao2(nome = "Lucas")`, onde se `nome` não for fornecido, o valor padrão será "Lucas".
- É possível passar objetos como parâmetros, como no exemplo de `mostrarPessoa(dados)`, onde um objeto com informações pessoais é passado para a função. (desestruturação de objetos)
- A ordem dos parametros é importante, pois os valores são atribuídos de acordo com a posição em que os parâmetros são definidos na função.
*/

//retorno de função
function calcularArea(base, altura) {
    return base * altura;
}

let area = calcularArea(5, 10);
console.log(`A área do retângulo é: ${area}`); // A área do retângulo é: 50

