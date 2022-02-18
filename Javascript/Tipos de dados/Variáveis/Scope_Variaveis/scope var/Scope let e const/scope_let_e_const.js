/*
# Scope

* Escopo determina a visibilidade de alguma variável no js

escopo=valor
{
    escopo / global
}
escopo=valor


## let e const
``` js
/// const e let são locais só funcionam no escopo onde 
foi criada

*/
{
    let y = 0
    console.log('> existe y antes do bloco? ', y) // antes

    {
        y = 0 // bloco
        console.log('> existe y', y)
    }

    console.log('> existe y depois do bloco? ', y) //depois
}

{
    let x = 0
    console.log('> existe x antes do bloco? ', x) // antes

    {
        x = 0 // bloco
        console.log('> existe x', x)
    }

    console.log('> existe x depois do bloco? ', x) //depois
}

{
    const k = 0
    console.log('> existe k antes do bloco? ', k) // antes
        {
            {
                { // criamos outra variavel const no outro escopo
                    // pois não podemos atribuir valores a variaveis tipo const
                    const k = 0 // bloco
                    console.log('> existe k', k)
                }
            }
        }
    console.log('> existe k depois do bloco? ', k) //depois
}