const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}
pessoa.falar(); // Bom dia!

const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO. undefined, porque this não aponta para pessoa

const falarDePessoa = pessoa.falar.bind(pessoa); // bind() define o this
falarDePessoa();



