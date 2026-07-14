// var nombre = "Juan";
// console.log(nombre);

// let promedio = 9.5;
// console.log(promedio);

// const edad = 20;
// console.log(edad);


// if (true) {
//     var libro = 'libro 1';
//     let animal = 'perro';
//     animal = 5;
//     console.log(animal);
// }

// console.log(libro);
// console.log(animal);




// let n1 = parseInt(prompt("Ingresa un número"));
// let n2 = Number(prompt("Ingresa un número"));
// console.log(n1);
// console.log(n2);


// let suma = n1 + n2;
// console.log(suma);



// let suma = 10 + 5;
// let resta = 10 - 5;
// let multiplicacion = 10 * 5;
// let division = 10 / 5;
// let residuo = 10 % 3

// console.log('Suma ' + suma);
// console.log('Resta ' + resta);
// console.log('Multiplicación ' + multiplicacion);
// console.log('División ' + division);
// console.log('Residuo ' + residuo);




// console.log(5 > 3);
// console.log(5 < 3);
// console.log(5 >= 5);
// console.log(5 <= 4);
// console.log(5 == '5');
// console.log(5 === '5');
// console.log(5 != 3);
// console.log(5 !== '5');




// let calificacion = 85;
// if (calificacion >= 70) {
//     console.log("Aprobado");
// } else {
//     console.log("Reprobado");
// }


// if (calificacion >= 90) {
//     console.log("Excelente");
// } else if (calificacion >= 70) {
//     console.log("Aprobado");
// } else {
//     console.log("Reprobado");
// }



// for (let i = 1; i <= 5; i++) {
//     console.log('Iteracion: ', i);
// }

// let tabla = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${tabla} x ${i} = ${tabla * i}`);
// }


// let contador = 1;

// while (contador <= 5) {
//     console.log(contador);
//     contador++;
// }

// function saludar(nombre) {
//     console.log("Hola " + nombre);
// }

// saludar("Axel");


// function aleatorio() {
//     let n = Math.floor(Math.random()*100) + 1;
//     console.log(n);
// }

// aleatorio()

// let numeros = [5,2];
// console.log(numeros);

// numeros.push(20);
// numeros.push(8);
// numeros.push(53);
// console.log(numeros);
// console.log(numeros[2]);


// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
    
// }


// let persona = {
//     nombre: "Juan",
//     edad: 20,
//     ciudad: "Tepic"
// }

// persona.carra = 'ISC';

// console.log(persona);
// console.log(persona.nombre);
// persona.nombre = "Carlos"
// console.log(persona.nombre);



let numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => console.log(numero))

let dobles = numeros.map(numero => numero * 2)
console.log(dobles);

let impares = numeros.filter(numero => numero % 2 == 1)
console.log(impares);

let suma = numeros.reduce((ant, numero) => ant + numero, 0)
console.log(suma);










