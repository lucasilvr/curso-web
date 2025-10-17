//funçao normal
let dobro = function(a){
    return 2 * a;
}
// função arrow
dobro = (a) => {    
    return 2 * a;
}
// return implícito
dobro = a => 2 * a; 
console.log(dobro(Math.PI));

// função normal
let ola = function(){
    return 'Olá';
}

ola = () => 'Olá'; //javascript nao obriga a declarar o parâmetro (mas nao significa que ela nao tenha parâmetro)
ola = _ => 'Olá'; // possui um parâmetro 
console.log(ola());