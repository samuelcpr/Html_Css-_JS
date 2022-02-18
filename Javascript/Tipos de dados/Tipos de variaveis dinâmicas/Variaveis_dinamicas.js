/*  
O js é uma linguagem fracamente tipada e dinâmica
- Variáveis não precisam ter um tipo
previamente definido
- podemos mudar o conteúdo da variável

- typeof // é utilizado para ver o tipo da variavel
*/

let clima = "Quente" //string
    // clima = "string" : esse comando é utilizado para mudar o valor
clima = 1 //number
console.log(typeof clima)

let tempo = 1 //number
tempo = "olá mundo" //string
console.log(typeof tempo)

const ambiente = "Quente" //string
    // const : utilizando a declaração const
    // não podemos modificar o tipo de variavel

console.log(typeof ambiente)

const valor = true // boolean

console.log(typeof valor)