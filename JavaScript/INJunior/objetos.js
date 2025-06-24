let pessoas = [
    {
        nome: 'Lucas',
        idade: 22,
        cidade: 'Rio de Janeiro',
        estudante: true,
        habilidades: ['JavaScript', 'HTML', 'CSS'],
        endereco: {
            rua: 'Rua Maracanã',
            numero: 123,
            bairro: 'Maracanã',
            referencias: {
                referencia1: 'Estádio do Maracanã',
                referencia2: 'Parque Maracanã',
            }
        }
    },
    {
        nome: 'Juliana',
        idade: 25,
        habilidades: ['Python', 'Django', 'Flask'],
        endereco: {
            rua: 'Rua Copacabana',
            numero: 456,
            bairro: 'Copacabana',
            referencias: {
                referencia1: 'Praia de Copacabana',
                referencia2: 'Forte de Copacabana',
            }
        }
    }
]

console.log(pessoas[0].nome); // Lucas
console.log(pessoas[0].idade); // 22
console.log(pessoas[0].habilidades); // ['JavaScript', 'HTML', 'CSS']
console.log(pessoas[0].habilidades[0]); // JavaScript
console.log(pessoas[0].endereco.rua); // Rua Maracanã
console.log(pessoas[0].endereco.referencias.referencia1); // Estádio do Maracanã
console.log( pessoas[1].nome); // Juliana
console.log(pessoas[1].endereco.bairro); // Copacabana
console.log(pessoas[1]['nome']); // Juliana
let xxxx = 'nome';
console.log(pessoas[1][xxxx]); // Juliana
console.log(pessoas[1]['endereco']['rua']); // Rua Copacabana

//desestruturação de objetos
let {nome, estudante} = pessoas[0];
console.log(estudante); // true
console.log(nome); // Lucas

//alterando valores do objeto
pessoas[0].nome = 'Lucas Silva';
console.log(pessoas[0].nome); // Lucas Silva

//adicionando novos atributos
pessoas[0].profissao = 'Desenvolvedor';
console.log(pessoas[0].profissao); // Desenvolvedor

//removendo atributos
delete pessoas[0].endereco.referencias;
console.log(pessoas[0].endereco.referencias); // undefined