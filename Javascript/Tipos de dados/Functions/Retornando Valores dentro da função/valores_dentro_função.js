// criar um aplicativo de frase motivacionais 

 // passo 1º
 // declaration/ declaração da função
 // fuction statement
 //createphrases() é a base da função
 /*function createphrases() {
    console.log('Etudar é muito bom')
    console.log('paciência e percistência')
    console.log('Revisão é mãe do aprendizado')
}

// A forma de executar/execute a função
// rodar/run, chamar/call, invocar/invoke

// para chamar a função
createphrases()

console.log('Fim do programa')

// A função serve agrpamento de códigos 
//e reutilização desse código */

////////////////////////////////////////////////////////////

/* sum significa somar

*/
// function expression
// ou function anonymous

// parâmetros da função (parameters)
const sum = function(number, number2){
    
    let total = number + number2
    // return executa o valor e retorna ao sum
    return total
    }
    // sum atribui 2 para number e 3 para number2
    //sum(2,3) // são conhecidos como arguments/ argumentos
    
    let number = 34
    let number2 = 25
    sum(number, number2)

    console.log(`o numero 1 é ${number}`)
    console.log(`o numero 2 é ${number2}`)
    console.log(`a soma é ${sum(number, number2)}`)
    // o total tambem imprime o resultado da soma
    console.log(total)