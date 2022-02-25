// Manipulando Strings e Arrays

// separe um texto que contem espaços, em um novo array onde
// cada texto é uma posição do array. Depois disso, transforme
//o array em um texto e onde eram espaços, coloque

let phrase = "Eu quero viver o Amor!"
// o split vai definir o que eu quero separar nessa fraze
// ou retira palavras
let myArray = phrase.split("o")
console.log(myArray)
// join é utilizado para mesclar os atributos 
phraseWithUnderscore = myArray.join('')
console.log(phraseWithUnderscore.toLowercase())