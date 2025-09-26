'use strict'
function Eje41() {
    //a
    let colors = ['red', 'yellow', 'green', 'white', 'blue', 'brown', 'pink', 'black'];
    let numero;
    let colorsUsa = [];
    do {
        numero = prompt("Introduce el número de franjas entre 1 y 5");
        if (numero < 1 || numero > 5) {
            alert("Introduce un número entero entre 1 y 5");
        }
    } while (numero < 1 || numero > 5);
    for (let x = 0; x < 5; x++) {
        colorsUsa.push(colors[Math.floor(Math.random() * colors.length)]);
    }
    let table = "<table border='1' style='border-collapse: collapse; width: 100%;'><tr>";

    for (let i = 0; i < numero; i++) {
        table += `<td style='background-color: ${colorsUsa[i]}; height: 300px; width: ${100 / numero}%;'></td>`;
    }
    table += "</tr> </table>";
    document.writeln(table);
}
function Eje42() {
    //b
    let colors = ['red', 'yellow', 'green', 'white', 'blue', 'brown', 'pink', 'black'];
    let numero;
    let colorsUsa = [];
    do {
        numero = prompt("Introduce el número de franjas entre 1 y 5");
        if (numero < 1 || numero > 5) {
            alert("Introduce un número entero entre 1 y 5");
        }
    } while (numero < 1 || numero > 5);
    for (let x = 0; x < 5; x++) {
        colorsUsa.push(colors[Math.floor(Math.random() * colors.length)]);
        for (let y = 0; y < colorsUsa.length; y++) {
            if (colorsUsa[y] == colorsUsa[x] && y != x) {
                do {
                    colorsUsa[x] = (colors[Math.floor(Math.random() * colors.length)]);
                } while (colorsUsa[y] == colorsUsa[x])
            }
        }
    }

    let table = "<table border='1' style='border-collapse: collapse; width: 100%;'><tr>";

    for (let i = 0; i < numero; i++) {
        table += `<td style='background-color: ${colorsUsa[i]}; height: 300px; width: ${100 / numero}%;'></td>`;
    }
    table += "</tr> </table>";
    document.writeln(table);
}
function Eje43() {
    //c
    let colors = ['red', 'yellow', 'green', 'white', 'blue', 'brown', 'pink', 'black'];
    let numero;
    let colorsUsa = [];
    do {
        numero = prompt("Introduce el número de franjas entre 1 y 5");
        if (numero < 1 || numero > 5) {
            alert("Introduce un número entero entre 1 y 5");
        }
    } while (numero < 1 || numero > 5);
    for (let x = 0; x < 5; x++) {
        colorsUsa.push(colors[Math.floor(Math.random() * colors.length)]);
        if (colorsUsa[x - 1] == colorsUsa[x] && x != 0) {
            do {
                colorsUsa[x] = (colors[Math.floor(Math.random() * colors.length)]);
            } while (colorsUsa[x - 1] == colorsUsa[x]);
        }
    }
    let table = "<table border='1' style='border-collapse: collapse; width: 100%;'><tr>";

    for (let i = 0; i < numero; i++) {
        table += `<td style='background-color: ${colorsUsa[i]}; height: 300px; width: ${100 / numero}%;'></td>`;
    }
    table += "</tr> </table>";
    document.writeln(table);
}