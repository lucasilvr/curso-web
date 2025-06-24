function Pessoa(){
    this.idade = 0;

    setInterval(() => {
        // Arrow function não tem this, então o this é o mesmo do contexto onde a função foi criada
        this.idade++;
        console.log(this.idade);    
    }, 1000)
}

new Pessoa;