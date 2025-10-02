'use strict'
function main() {
    let rejilla = [];
    
    rejilla = pedirrejilla();
    let g = pedirNumero(1);
    rejilla = regeneracion(rejilla);
    console.log(rejilla);
}

function regeneracion(rejaI) {

    let aux1 = [];
    let aux2 = [];
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;
    let vivas = 0;
    for (let x = 0; x < rejaI.length; x++) {
        aux2 = [];
        for (let y = 0; y < rejaI.length; y++) {

            switch (true) {
                case x - 1 < 0:
                    x1 = 0
                    break;
                case x + 1 > rejaI.length:
                    x2 = rejaI.length;
                    break;
                default:
                    x1 = x - 1
                    x2 = x + 1
                    break;
            }
            switch (true) {
                case y - 1 < 0:
                    y1 = 0
                    break;
                case y + 1 > rejaI.length:
                    y2 = rejaI.length;
                    break;
                default:
                    y1 = y - 1
                    y2 = y + 1
                    break;
            }
            console.log("aaaa "+x1+" "+y1+" "+vivas)
            vivas = 0;
            for (x1; x1 <= x2; x1++) {
                for (y1; y1 <= y2; y1++) {

                    if (rejaI[x1][y1] != rejaI[x][y]) {
                        if (rejaI[x1][y1]=1) {
                            vivas++;
                            console.log(""+x1+""+y1+""+vivas)
                        }
                    }
                }
            }

            aux2.push(logico(rejaI[x][y], vivas))
        }
        aux1.push(aux2);
    }
    return aux1
}
function logico(x, v) {
    switch (true) {
        case x = 1 && v < 2:
            x = 0
            break;
        case x = 1 && v >= 2 && v <= 3:
            x = 1
            break;
        case x = 1 && v > 3:
            x = 0
            break;
        case x = 0 && v == 3:
            x = 1
            break;
        default:
            x = 0
            break;
    }
    return x;
}
function pedirrejilla() {
    let tamaniorejilla = pedirNumeroRango(3, 30);
    let vidasI = pedirNumeroRangoP(1, 99);
    let rejilla = [];
    let aux = [];
    for (let x = 0; x < tamaniorejilla; x++) {
        for (let y = 0; y < tamaniorejilla; y++) {

            if (Math.floor(Math.random() * 100) < vidasI) {
                aux.push(1);
            }
            else {
                aux.push(0);
            }
        }
        rejilla.push(aux);
        aux = [];
    }
    console.log(rejilla);
    return rejilla;

}

// Función para pedir un número dentro de un rango
function pedirNumeroRango(num1, num2) {
    let numero;
    do {
        numero = prompt("Introduce un número entre " + num1 + " y " + num2 + ":");

        // Convertimos a número y validamos
        numero = parseFloat(numero);

        // Verificamos si:
        // - No es un número válido (isNaN)
        if (isNaN(numero)) {

            numero = null; // Forzamos a que siga en el bucle
        }
    } while ((numero === null || isNaN(numero)) && !(numero <= num1 && numero >= num2));

    return numero;
}
function pedirNumeroRangoP(num1, num2) {
    let numero;

    numero = prompt("Introduce un número entre " + num1 + " y " + num2 + ":");

    // Convertimos a número y validamos
    numero = parseFloat(numero);

    // Verificamos si:
    // - No es un número válido (isNaN)
    if (isNaN(numero)) {

        numero = 30; // Forzamos a que siga en el bucle
    }
    return numero;
}
function pedirNumero(num) {
    let numero;
    let entrada;

    do {
        entrada = prompt("Introduce un número mayor a " + num + ":");

        // Si el usuario cancela o deja vacío, salimos retornando null
        if (entrada === null || entrada.trim() === "") {
            return null;
        }

        // Convertimos a número y validamos
        numero = parseFloat(entrada);

    } while (isNaN(numero) || numero <= num);

    return numero;
}