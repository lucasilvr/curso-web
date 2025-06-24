//estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1; // se a for undefined, nulo ou 0, a recebe 1
    b = b || 1; // se b for undefined, nulo ou 0, b recebe 1
    c = c || 1; // se c for undefined, nulo ou 0, c recebe 1
    return a + b + c;
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

//estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1; // se a for undefined, a recebe 1
    b = 1 in arguments ? b : 1; // se b for undefined, b recebe 1
    c = isNaN(c) ? 1 : c; // se c for NaN, c recebe 1
    return a + b + c;
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

//valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) { // se a, b ou c forem undefined, recebem 1
    return a + b + c;
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));