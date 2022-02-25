/*  

# scope

* Escopo determina a visibilidade de alguma variável no js

# Block statement // Declaração de bloco

// Vamos iniciar um bloco
{
    // aqui dentro é um bloco e posso colocar qualquer
    código
} // aqui fechamos o bloco


# O bloco, também criará um novo escopo. chamamos de 
`block-scoped`

*/

{
    let x = 0
    console.log(x)
}

// # (var)
// O (Var) é global e poderá funcionar fora de um escopo de bloco

// var x undefined 
console.log('>existe x antes do bloco', x)

{
    // aqui é scopo local

    var x = 0 // com o var o js adiciona o x acima como undefined 
}
// aqui fora é scopo global
console.log('> existe x depois do bloco', x)