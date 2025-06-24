function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`);
    }
    else {
        return area;
    }
}

console.log(area(2, 2));
console.log(area(2)); // //undefined, NaN - NOT A NUMBER
console.log(area()); // //undefined, NaN - NOT A NUMBER
console.log(area(2, 3, 4, 5)); //pega só os dois primeiros
console.log(area(5, 5)); // //undefined


