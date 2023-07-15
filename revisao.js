function imprimir(texto) {
    console.log(texto)
}

function calcularArea(base, altura) {
    return Number(base * altura).toFixed(2)
}

imprimir('Ola mundo');
let area = calcularArea(10, 20);
imprimir(area);

function calcularFactorial(numero) {
    if (numero === 0) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

let numero = 10
let fat = calcularFactorial(numero)
imprimir("O fatorial de "+numero+" e "+fat)