function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
    //return "Olá, " + nome + "!"
    //return `Olá, ${nome}!`
}

let nome = prompt("Digite seu nome: ")
alert(cumprimentar(nome))

