/* Sessao main */
function soma_total(soma, numero) {
    for (var i = 1; i <= numero; i++) {
        soma = soma + i;
    }
    return soma
}
/* Main */
var soma = 0;
do {
    var numero = parseInt(prompt("Digite o valor de N: "));
    if (numero <= 0) {
        alert("Digite um numero maior que 0 ");
    }
} while (numero <= 0);
for (var n = 1; n <= numero; n++) {
    alert("numero " + n);
}
alert("A soma de todos os numeros mostrado é de " + soma_total(soma, numero));
console.log("A soma de todos os numeros mostrado é de " + soma_total(soma, numero));
