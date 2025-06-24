const soma = function(x, y){
    return x + y;
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);    
imprimirResultado(3, 4, soma); // passando a função soma como parâmetro
imprimirResultado(3, 4, function(x, y){
    return x - y;
}); // passando uma função anônima como parâmetro

imprimirResultado(3, 4, (x, y) => x * y); // passando uma função arrow como parâmetro

const pessoa = {
    falar: function(){ // ou tambem falar:() {
        console.log('Opa');
    }
}

pessoa.falar(); // chamando o método falar do objeto pessoa