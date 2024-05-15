// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.
// Ejemplo:

//     Ingresa un número> 5
//     1
//     3
//     4
//     5
// NOTA: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.

let numeroLimite = parseInt(prompt("Digite el limite de las lista:"));
let numeros = [ ];


for (let i = 0; i <= numeroLimite ; i++) {


    numeros.push(i);
}

const borrar = numeros.splice( 2,1 );
console.log(numeros);