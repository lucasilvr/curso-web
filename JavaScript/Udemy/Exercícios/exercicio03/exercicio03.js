function calcularSalario(quantHoras, valorHora){
    return quantHoras * valorHora

}

let quantHoras = parseFloat(prompt("Quantas horas o funcionário trabalhou no mês?: "))
let valorHora = parseFloat(prompt("Qual o valor da hora de trabalho?: "))

let total = calcularSalario(quantHoras, valorHora)
console.log(`Salário igual a R$ ${total}`)