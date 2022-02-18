/*
# Scope

* Escopo determina a visibilidade de alguma variável no js

# Block statement
``` js
 /// Vamos iniciar um bloco
{
    /// aqui dentro é um bloco e passo colocar qualquer
    código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. chamamos de 
`block-scoped`

*/

{
    let x = 0
    console.log(x)
}

/* 
## var
``` js
/// var é global e poderá funcionar fora de um escopo de bloco
*/
var x

console.log('> existe x antes do bloco', x)

{
    x = 0
}

console.log('> existe x depois do bloco? ', x)

/* 
## let e const
```
*/