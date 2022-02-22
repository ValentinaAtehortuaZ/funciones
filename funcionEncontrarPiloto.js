// ejemplo2
// funcion tradicional -- metodo split

/*function  dividirNombre(codigo){

    return codigo.split(":")

}

let piloto= dividirNombre("ABCD1234: Valentina","ADSE3456: Jhon","KHYU4578: Karen")
console.log("El piloto es: "+piloto[1])*/

//funcion flecha

let dividirNombre=codigo=>codigo.split(":")

    
let piloto= dividirNombre("ABCD1234: Valentina","ADSE3456: Jhon","KHYU4578: Karen")
console.log("El piloto es: "+piloto[1])