function parte1() {
    console.info("Parte 1. Función exponente con for.");

    potencia(5, 3)
}

function potencia(base, exponente) {
    let res = base
    for (let i = 1; i < exponente; i++) {
        res *= base;
    }
    console.log(base, " elevado a ", exponente, ' es ', res)
}


function parte2() {
    console.info("Parte 2. Cajero automático.");
    let saldo = 5000;
    do {
        let opc = prompt("*Menu*" +
            "\n1. Consultar saldo" +
            "\n2. Depositar" +
            "\n3. Retirar" +
            "\n4. Salir"
        )

        switch (opc) {
            case '1':
                console.log('Tu saldo es de $', saldo);
                break
            case '2':
                let cant = 0;
                do {
                    cant = Number(prompt("Ingresa la cantidad a depositar"));
                    if (isNaN(cant) || cant <= 0) {
                        alert("Favor de ingresar un número válido")
                        continue
                    }
                } while (isNaN(cant) || cant <= 0);
                saldo += cant;
                break;
            case '3':
                let cant2 = 0;
                do {
                    cant2 = Number(prompt("Ingresa la cantidad a retirar"));
                    if (isNaN(cant2) || cant2 <= 0) {
                        alert("Favor de ingresar un número válido")
                    } else if (cant2 > saldo) {
                        alert("No puedes retirar más que el saldo actual");
                    }
                } while (isNaN(cant2) || cant2 <= 0 || cant2 > saldo)
                saldo -= cant2;
                break;
            case '4':
                return;
            default:
                alert("Opcion no válida, Intente nuevamente");
        }
    } while (true);
}

function aleatiorio(max = 6, min = 1) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parte3() {
    console.info("Parte 3. Juego de dados.");
    let contador = 0, n1 = 0, n2 = 0;
    do {
        n1 = aleatiorio();
        n2 = aleatiorio();
        contador++;
        console.log(n1, " - ", n2);
    } while (n1 != n2);
    console.log("Se necesitaron ", contador, contador > 1 ? ' lanzamientos' : ' lanzamiento');
}

function parte4() {
    console.log("Parte 4. Adivinar número en 7 turnos.");
    let n = aleatiorio(100, 1);
    let adivino = false;
    for (let i = 0; i < 7; i++) {
        let num = Number(prompt("Ingresa un número entre el 1 al 100"));

        if (isNaN(num) || num < 1 || num > 100) {
            alert("Ingresa un número válido");
            i--;
            continue;
        }

        if (n == num) {
            adivino = true;
            break;
        }

        if (n > num) {
            alert("Mas grande");
        } else {
            alert("Mas pequeño");
        }
    }
    console.log(adivino ? "Felicidades, adivinaste" : "Perdiste, el número es: " + n + ". Intenta nuevamente");
}

function parte5() {
    console.log("Parte 5. Ventas de una tienda.")
    let ventas = [];
    let continuar = true;

    while (continuar) {
        let vendedor = prompt("Nombre del vendedor: ");
        let producto = prompt("Nombre del producto: ");
        let cantidad;

        while (true) {
            let entrada = prompt("Cantidad de productos: ");
            cantidad = parseInt(entrada);
            if (!isNaN(cantidad) && cantidad > 0) break;
            alert("Ingresa un número válido mayor a 0.");
        }
        let precio;

        while (true) {
            let entrada = prompt("Precio unitario: ");
            precio = parseFloat(entrada);
            if (!isNaN(precio) && precio > 0) break;
            alert("Ingresa un precio válido mayor a 0.");
        }

        ventas.push({ vendedor, producto, cantidad, precio });
        continuar = confirm("¿Deseas agregar otra venta?");
    }

    let totalVentas = ventas.length;
    let totalIngresos = ventas.reduce((sum, v) => sum + (v.precio * v.cantidad), 0);

    let productos = {};
    ventas.forEach(v => {
        productos[v.producto] ? productos[v.producto] += v.cantidad : productos[v.producto] = v.cantidad;
    })

    let ventasVendedor = {};
    ventas.forEach(v => {
        ventasVendedor[v.vendedor] ? ventasVendedor[v.vendedor] += v.cantidad * v.precio : ventasVendedor[v.vendedor] = v.cantidad * v.precio;
    })

    let mejorVendedor = "";
    let montoMax = 0;
    for (let vendedor in ventasVendedor) {
        if (ventasVendedor[vendedor] > montoMax) {
            montoMax = ventasVendedor[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Resumen de Ventas");
    console.log("Total de ventas realizadas:", totalVentas);
    console.log("Total de ingresos: $" + totalIngresos);
    console.log("Unidades vendidas por producto:");
    for (let prod in productos) {
        console.log(`- ${prod}: ${productos[prod]} unidades`);
    }
    console.log(`Vendedor con más ventas: ${mejorVendedor} ($${montoMax})`);
}

// parte1()
// parte2()
// parte3()
// parte4()
parte5()