function aleatiorio(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // Genera un número aleatorio entre min y max (inclusive)
}

function parte1() {
  console.info('Parte 1: Comparación de números aleatorios');

  let n1 = aleatiorio();
  let n2 = aleatiorio();
  console.log('Primer número: ' + n1);
  console.log('Segundo número: ' + n2);

  if (n1 === n2) {
    console.log('Los números son iguales');
  } else if (n1 > n2) {
    console.log('El primer número es mayor: ' + n1);
  } else {
    console.log('El segundo número es mayor: ' + n2);
  }
}

function parte2() {
  console.info('Parte 2: aleatorios hasta que sea 0');

  let n = aleatiorio(5);
  console.log('generado: ' + n);

  while (n !== 0) {
    n = aleatiorio(5);
    console.log('generado: ' + n);
  }
}

function parte3() {
  console.info('Parte 3: tabla con numero generado aleatoriamente (de 2 a 10)');

  let num = aleatiorio(10, 2);
  console.log('Número generado: ' + num);
  for (let i = 1; i <= 10; i++) {
    console.log(num + ' x ' + i + ' = ' + num * i);
  }
}

function parte4() {
	console.info('Parte 4: Solicita 10 numeros entre el 1 y el 100, y determina cuantos son pares y cuantos impares');
	let pares = 0, impares = 0;
	for (let i = 0; i < 10; i++) {
		let n = prompt('Ingresa un número entre 1 y 100:');

		n = parseInt(n);
		if (isNaN(n) || n < 1 || n > 100) {
			i--;
			alert('Número inválido. Por favor ingresa un número entre 1 y 100.');
			continue;
		}
		console.log('Número ingresado: ' + n);
		if (n % 2 === 0) {
			pares++;
		} else {
			impares++;
		}
	}
	console.log('Números pares: ' + pares);
	console.log('Números impares: ' + impares);
}

function parte5() {
	console.info('Parte 5: Tienda departamental');
	let ventas = 0;
	do {
		ventas = prompt("Ingresa la cantidad en ventas del empleado");
		if (isNaN(parseFloat(ventas)) || ventas < 5000 || ventas > 30000) alert("Favor de ingresar un número válido (entre 5,000 y 30,000)");
		
	} while (ventas < 5000 || ventas > 30000 || isNaN(parseFloat(ventas)));

	let comision = ventas < 10000 ? ventas * .1 : ventas * .15
	console.log("El empleado vendió $" + ventas + " en artículos, por lo que su comisión es de $" + comision);
	

}

parte1();
parte2();
parte3();
parte4();
parte5();
