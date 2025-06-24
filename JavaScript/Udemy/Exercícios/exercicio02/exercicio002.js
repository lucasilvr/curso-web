function idadeDias(idade){
    return idade * 365
}

let idade = prompt('Digite sua idade: ');
let res = idadeDias(idade);
console.log(`{Você tem ${res} dias de vida)`)  