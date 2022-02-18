/*
## Para criar nomes

* js é case-sensitive ( é sensítivel ao caso de maiusculas e minuculas)
* js aceita a cadeia de caracteres Unicode ("" acentuações nas variaveis )

- Posso:
  * Iniciar com esses caracteres especiais: $ _
  * Iniciar com letras
  * Colocar acentos
  * Letras maíusculas e minúsculas fazem diferença

- Não posso:
   * Iniciar com números
   * colocar espaços vazios nome

- Ideal
  * criar nomes que fazem sentido
  * Que explique o que a variável é ou faz
  * camelcase
  * snake_case
  * Escrever em inglês


  */

let Álisson = 'Álisson' // com acento
console.log(Álisson)
console.log(typeof Álisson) // tipo de variavel
let Alisson = 'Alisson' // sem acento
console.log(Alisson)
console.log(typeof Alisson)
let alisson = 'alisson' // minusculo
console.log(alisson)
console.log(typeof alisson)

{
    let name = "Samuel"
    console.log(name)
    console.log(typeof name)
}