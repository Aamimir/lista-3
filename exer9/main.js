/* Sessao function */
function maior(numero1, numero2) {
    for (var i = 1; i <= 5; i++) {
        if (numero1 < numero2) {
            numero1 = numero2;
        }
    }
    return numero1
}
function menor(numero2, numero3) {
    for (var i = 1; i <= 5; i++) {
        if (numero2 < numero3) {
            numero3 = numero2;
        }
    }
    return numero3
}
/* Main */
var numero1 = 0, numero2, numero3 = 0;
do {
    numero1 = parseInt(prompt("Digite o 1 numero"));
    if (numero1 <= 0) {
        alert("Digite um numero maior que zero")
    }
} while (numero1 <= 0);
numero3 = numero1;
for (n = 2; n <= 5; n++) {
    numero2 = parseInt(prompt("Digite o " + n + "numero"));
    do {
        if (numero2 <= 0) {
            alert("Digite um numero maior que zero")
        }
    } while (numero2 <= 0);
}
console.log("maior " + maior(numero1, numero2));
console.log("menor " + menor(numero2, numero3));

/*// Funcao para retornar o menor valor de um array
function menor(numeros) {
    return Math.min.apply(Math, numeros);
}
// Funcao para retornar o maior valor de um array
function maior(numeros) {
    return Math.max.apply(Math, numeros);
}
// Agora e so pegar os resultados
var numeros = [2, 3, 1, 4, 6, 5];  // Nosso array
alert("menor numero: " + menor(numeros)); // Menor valor
alert("maior numero: " + maior(numeros)); // Maior valor

console.log(menor(numeros)); // Menor valor
console.log(maior(numeros)); // Maior valor*/

/*var numero1, numero2, numero3;

do {
    numero1 = parseInt(prompt("Digite o 1 numero"));
    if (numero1 <= 0) {
        alert("Digite um numero maior que zero")
    }
} while (numero1 <= 0);
numero3 = numero1;

for (n = 2; n <= 20; n++) {
    do {
        numero2 = (prompt("Digite o " + n + "numero"));
        if (numero2 <= 0) {
            alert("Digite um numero maior que zero")
        }
    } while (numero2 <= 0);
    if (numero2 > numero1) {
        numero1 = numero2;
    } else if (numero2 < numero3) {
        numero3 = numero2;
    }
}
alert("maior numero é " + numero1 + " menor numero " + numero3);
console.log("maior numero é " + numero1 + " menor numero " + numero3);


var numero1;
var numero2;

numero1 = parseInt(prompt("digite um numero"));

numero2 = parseInt(prompt("digite mais um numero"));

var resp = numero1 * numero2;

alert("A sua aréa é " + resp)
console.log("A sua aréa é " + resp)*/