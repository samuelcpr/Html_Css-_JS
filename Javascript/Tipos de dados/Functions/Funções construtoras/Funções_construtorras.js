/*
function() constructor

* expressão new
* criar um novo objecto
* this keyword

*/

function person(nome){
    // this name recebe samuel e joao
    this.name = nome
    this.walk = function(){
        // return imprime samuel esta andando joao esta andando
        // ou seja recebe this.name e concatena com a string 'esta andando'
        return this.name + 'está andando'
    }
}
// a função new person nos retorna um objeto 
const samuel = new person ('samuel')
const joao = new person ('joao')

console.log(samuel.walk())
console.log(joao.walk())


// nesse exemplo usamos new string para detalhar a função
let name = new String('samuel')

console.log(name)


// exemple date
let Data = new Date('2022-02-20')

console.log(Data)

let numero = new Number(1)

console.log(numero)