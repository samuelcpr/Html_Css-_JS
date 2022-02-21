/*

   Function() constructor

   * expressão new
   * criar um novo objeto
   * this keyword
   
*/
// modelo para criar diversos objetos
function person(name) {
    this.name = name
} 
// person argumento samuel
//isso é um objeto
    const samuel = new person("samuel")
    //isso é um objeto
    const vitor = new person("vitor")
    console.log(samuel)
    console.log(vitor)