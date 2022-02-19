// object

// typeof descobrir tipo de variavel
const person  = {
    name:'Samuel',
    age: 30,
    weight: 88.6,
    isAdmin: true
}
// pegamo o person e acrecentamos e pegamos o obeto
// que queremos que seja imprimido na tela
console.log(person.name)
console.log(typeof person.name)

console.log(person.age)
console.log(typeof person.age)

console.log(person.weight)
console.log(typeof person.weight)

console.log(person.isAdmin)
console.log(typeof person.isAdmin)
// estamos atribuindo a variavel e o objeto com ${variavel.Objeto}
console.log(`${person.name} Tem ${person.age} anos`)

console.log(`${person.name} tem ${person.weight} de aultura`)