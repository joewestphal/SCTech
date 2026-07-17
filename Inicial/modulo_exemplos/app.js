var pessoa = require("./commons/pessoa")
var soma = require ("./commons/soma")
var imposto = require ("./commons/calculoimposto")

otto = pessoa();

//console.log(JSON.stringify(otto));
//console.log(soma (2,2))

console.log('valor do produto com imposto:' + imposto.adicionar(10));
console.log ('valor do imposto:' + imposto.valor(10));
console.log('taxa do imposto:' + imposto.taxa)
