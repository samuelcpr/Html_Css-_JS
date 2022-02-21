// callback function

// callback significa chame de volta

// O function sayMyName (name) registrou os atributos na memória
function sayMyName(name){
   console.log('antes de executar a funcao callback')

   name()

   console.log('depois de executar a callback')
}
// esse atributo será alocado ao meio da execução
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)