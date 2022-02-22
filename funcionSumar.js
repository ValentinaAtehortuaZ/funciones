//funcion que suma dos numeros
//tendre una funcion con dos parametros(numero1 y numero2)

/*function sumar(numero1,numero2){

    let suma=numero1 + numero2
    return(`El resultado de su suma de ${numero1} y ${numero2} es : ${suma}`)

}

// para utilizar una funcion la debemos llamar
//primera forma de llamar una funcion
console.log(sumar( 5,8))

//segunda forma de llamar una funcion
let resultado=sumar(5,8)
console.log(resultado)*/

//FUNCION DE FLECHA

/*let sumar=(numero1,numero2)=>{
    let suma=numero1 + numero2
    return(`El resultado de su suma de ${numero1} y ${numero2} es : ${suma}`)

}
let resultado=sumar(5,8)
console.log(resultado)

// Ahorrando cogido

//let sumar=(numero1,numero2)=>`El resultado de su suma de ${numero1} y ${numero2} es : ${numero1 + numero2}`

let resultado=sumar(5,8)
console.log(resultado)*/

// Ejemplo
// funcion tradicional
/*function calcularDistancia(x1,x2,y1,y2){
   
    let restaX=x2- x1
    let restaY=y2 -y1
    let potenciaX= Math.pow(restaX,2)
    let potenciaY= Math.pow(restaY,2)
    let suma= potenciaX + potenciaY
    let raiz=Math.sqrt(suma)
    return(raiz)
}

console.log(calcularDistancia(4,10,2,8))*/

/*function calcularDistancia(x1,x2,y1,y2){

    let result=Math.sqrt(Math.pow(x2 - x1,2)+ Math.pow(y2 - y1,2))
    return result
}

console.log(calcularDistancia(50,0,20,0))*/

//funcion con flecha
//Forma larga
/*let calcularDistancia=(x1,x2,y1,y2)=>{

    let result=Math.sqrt(Math.pow(x2 - x1,2)+ Math.pow(y2 - y1,2))
    return result
}

let resultado=calcularDistancia(50,0,20,0)
console.log(resultado)*/

//forma corta

/*let calcularDistancia=(x1,x2,y1,y2)=>Math.sqrt(Math.pow(x2 - x1,2)+ Math.pow(y2 - y1,2))

let distancia= calcularDistancia(50,0,20,0)
console.log(`La distancia entre los planetas es ${distancia.toFixed(2)} UA`) // para darle dos decimales
console.log(`La distancia entre los planetas es ${Math.round(distancia)} UA`) // para redondear*/





