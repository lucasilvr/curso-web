function soma(){ //arguments é um objeto semelhante a um array
    //arguments é uma variável especial que contém todos os argumentos passados para a função
    let soma = 0;
    for (i in arguments) {
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1.1, 2.2, 3.3));
console.log(soma(1.1, 2.2, "Teste"));
console.log(soma('a', 'b', 'c'));
