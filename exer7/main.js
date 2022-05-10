/* Sessao function */
function multitotal(multi, numero) {
    for (var i = 1; i <= numero; i++) {
        multi = multi * i;
    }
    return multi
}
/* Main */
var multi = 1;
do {
    numero = parseInt(prompt("Digite o valor de N: "));
    if (numero <= 0) {
        alert("Digite um numero maior que 0 ");
    }
} while (numero <= 0);
for (var n = 1; n <= numero; n++) {
    alert("numero " + n);
}
alert("A soma de todos os numeros mostrado é de " + multitotal(multi, numero));
console.log("A soma de todos os numeros mostrado é de " + multitotal(multi, numero));


/*var numero, multiplicação = 1;

do {
    numero = parseInt(prompt("Digite o valor de N: "));
    if (numero <= 0) {
        alert("Digite um numero maior que 0 ");
    }
} while (numero <= 0);

for (var n = 1; n <= numero; n++) {
    alert("numero " + n);
    multiplicação = multiplicação * n;
}
alert("A multiplicação de todos os numeros mostrado é de " + multiplicação);
console.log("A multiplicação de todos os numeros mostrado é de " + multiplicação);
*/

/*var numero1;
var numero2;

numero1 = parseInt(prompt("digite um numero"));

numero2 = parseInt(prompt("digite mais um numero"));

var resp = numero1 * numero2;

alert("A sua aréa é " + resp)
console.log("A sua aréa é " + resp)*/