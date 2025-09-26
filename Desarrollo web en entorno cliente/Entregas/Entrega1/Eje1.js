'use strict'

function PrimerE() {
    //faltarian validaciones para comprovar que es un numero y no una letra pero 
    // es algo que no emos dado y extraño por lo que no se lo pondre para que 
    // se use pero aqui esta
    /*function pedirNumero() {
    let numero;
    do {
        numero = prompt("Introduce un número entre 1 y 5:");
        
        // Convertimos a número y validamos
        numero = parseFloat(numero);
        
        // Verificamos si:
        // - No es un número válido (isNaN)
        // - No es un número entero (numero % 1 !== 0)
        // - Está fuera del rango 1-5
        if (isNaN(numero) || numero % 1 !== 0 || numero < 1 || numero > 5) {
            alert("Por favor, introduce un número entero entre 1 y 5");
            numero = null; // Forzamos a que siga en el bucle
        }
    } while (numero === null || isNaN(numero) || numero < 1 || numero > 5);
    
    return numero;
}*/
    let num;
    let NumberList = [];
    let Cuadrados = 0;
    let c = 0;
    do {
        num = prompt("Escriba un numero");

        if (num <= 0) {
            alert("Introduzca un numero Mallor a 0");
        }
    } while (num <= 0);

    //a
    for (let x = 1; num >= x; x++) {
        if ((num % x) == 0) {
            NumberList.push(x);
        }
    }
    alert(NumberList)

    //b
    NumberList.forEach(cuadra => {
        Cuadrados += (cuadra ** 2);

    });
    alert(Cuadrados);

    //c

    if (Number.isInteger(Math.sqrt(Cuadrados))) {
        alert(Cuadrados + " Es un cuadrado y este es su numero" + Math.sqrt(Cuadrados))
    }
    else {
        alert(Cuadrados + " No es un cuadrado")
    }

}
