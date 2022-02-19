// Array

const animals = [
    'lion',
    'macaco',
    'gato',
    // colocando objeto
    {
        nome: 'cachorro',
        idade: 3
    }
]

// como acessar valores dentro do array

// no array os elementos são numerados iniciando de zero
// nesse exemplo abaixo estamos iniciano com o elemento 1 ou seja [1 macaco]
// [0 lion] [3 gato] 
console.log(animals[1])
console.log(animals[0])
console.log(animals[2])

// para saber a quantidade de objetos usamos o length

console.log(animals.length)

console.log(animals[3].nome)