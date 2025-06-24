function Pessoa(){
    this.idade = 0;

    const self = this; //salva o contexto de this
    setInterval(function(){
        self.idade++;
        console.log(this.idade);    
    }/*.bind(this), */, 1000)
}

new Pessoa;

//OU DESSA FORMA, DUAS FORMAS DE FAZER A MESMA COISA, SALVAM O CONTEXTO DE this

function Pessoa(){
    this.idade = 0;

    setInterval(function(){
        this.idade++;
        console.log(this.idade);    
    }.bind(this), 1000);
}

new Pessoa;