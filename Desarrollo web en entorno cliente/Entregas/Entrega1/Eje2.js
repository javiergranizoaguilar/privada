'use strict'

function Eje2() {
    let num = 0;
    do {
        num = prompt("Escriba el numero de kilometros recoridos diariamente durante esta semana");

        if (num <= 0) {
            alert("Introduzca un numero Mallor a 0");
        }
    } while (num <= 0);

    switch (true) {
        case num <= 10:
            document.writeln("<h1>Corredor Novato<h1>");
            break;
        case num > 10 && num <= 30:
            document.writeln("<h1>Corredor Iniciado<h1>");
            break;
        case num > 30 && num <= 40:
            document.writeln("<h1>Corredor Experto<h1>");
            break;
        case num > 40:
            document.writeln("<h1>Corredor Nievel Elite<h1>");
            break;
        default: document.writeln("<h1>Tu eres un hacker</h1>")
    }
}