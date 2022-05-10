/* Sessao function */
function horatotal(hora, total) {
    for (var dia = 1; dia <= 30; dia++) {
        total = total + (10.00 * hora);
    }
    return total
}

/* Main */
var total = 0;
for (var dia = 1; dia <= 30; dia++) {
    do {
        var hora = parseFloat(prompt("Quantas horas você trabalho no dia " + dia + " do mês"));
        if (hora < 0) {
            alert("Digite um numero de 0 para cima");
        }
    } while (hora < 0);
}
alert("Seu salario bruto vai ser de " + horatotal(hora, total) + "R$")
console.log("Seu salario bruto vai ser de " + horatotal(hora, total) + "R$")


/*var hora, total = 0;

for (var dia = 1; dia <= 30; dia++) {
    do {
        hora = parseInt(prompt("Quantas horas você trabalho no dia " + dia + " do mês"));
        total = total + (10.00 * hora);
        if (hora < 0) {
            alert("Digite um numero de 0 para cima");
        }
    } while (hora < 0);
}
alert("Seu salario bruto vai ser de " + total + "R$")
console.log("Seu salario bruto vai ser de " + total + "R$")
*/




/*var numero1;
var numero2;

numero1 = parseInt(prompt("digite um numero"));

numero2 = parseInt(prompt("digite mais um numero"));

var resp = numero1 * numero2;

alert("A sua aréa é " + resp)
console.log("A sua aréa é " + resp)*/