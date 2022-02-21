// function scope

// estamos criando um pensamento
let subject = 'create video'
                     // ao colocar o (subject) entre () eu crio um novo subject
function createThink(subject){
    // não foi atribuido o let, por esse motivo
    // o subject vai imprimir study na segunda console.log()
    subject = 'estudo'
   return subject
}
// aqui vai ser imprimido o (let subject) ou seja a primeira
//declaração
console.log(subject)
// joguei o subject dentro da função
// aqui vai ser imprimido a segunda subject sem o let
console.log(createThink(subject))
