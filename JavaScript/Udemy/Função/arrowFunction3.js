let comparaComThis = function (param){
    console.log(this == param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj); // bind é um método que força o this a ser o obj
comparaComThis(global); // this continua sendo o global
comparaComThis(obj); // this é o obj

let comparaComThisArrow = param => console.log(this == param);
comparaComThisArrow(global); // this é o global
comparaComThisArrow(module.exports); // this é o module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj); // bind não tem efeito em arrow function
comparaComThisArrow(obj); // this é o global
comparaComThisArrow(module.exports); // this é o module.exports