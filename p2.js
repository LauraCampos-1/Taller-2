//Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

const nombre = prompt ('¿Cúal es tu nombre?')
const añoNacimiento = prompt('Digita tu año de nacimiento (numero)')
const añoActual = 2024
const edadActual = añoActual - añoNacimiento


console.log ('Tienes ' + edadActual + 'años')
alert (' Hola ' + nombre + '!' + 'Grandioso, tienes ' + edadActual + 'años')
