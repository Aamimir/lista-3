<<<<<<< HEAD
/* Sessao function */
function preçofinal(preço, quantidade, total) {
	for (var i = 1; i <= 5; i++) {
		total = total + (preço * quantidade);
	}
	return total
}
/* Main */
var total = 0;
for (var i = 1; i <= 5; i++) {
	do {
		var preço = parseFloat(prompt("Digite o valor: "));
		var quantidade = parseInt(prompt("Digite a quantidade: "));
		if (quantidade <= 0 || preço <= 0) {
			alert("Digite um numero maior que 0");
		}
	} while (quantidade <= 0 || preço <= 0);
}
alert("O total a ser pago é de " + preçofinal(preço, quantidade, total));
console.log("O total a ser pago é de " + preçofinal(preço, quantidade, total));

/*var numero1;
var numero2;

numero1 = parseInt(prompt("digite um numero"));

numero2 = parseInt(prompt("digite mais um numero"));

var resp = numero1 * numero2;

alert("A sua aréa é " + resp)
console.log("A sua aréa é " + resp)*/

/*var preço, quantidade, total = 0;

for (var q = 1; q <= 5; q++) {
	do {
		quantidade = parseInt(prompt("Qual a quantidade do produto " + q));
		preço = parseFloat(prompt("Qual o preço do produto " + q));

		total = total + (quantidade * preço);
		if (quantidade <= 0 || preço <= 0) {
			alert("Digite um numero maior que 0");
		}
	} while (quantidade <= 0 || preço <= 0);
}
alert("O total a ser pago é de " + total);
console.log("O total a ser pago é de " + total);
=======
/* Sessao function */
function preçofinal(preço, quantidade, total) {
	for (var i = 1; i <= 5; i++) {
		total = total + (preço * quantidade);
	}
	return total
}
/* Main */
var total = 0;
for (var i = 1; i <= 5; i++) {
	do {
		var preço = parseFloat(prompt("Digite o valor: "));
		var quantidade = parseInt(prompt("Digite a quantidade: "));
		if (quantidade <= 0 || preço <= 0) {
			alert("Digite um numero maior que 0");
		}
	} while (quantidade <= 0 || preço <= 0);
}
alert("O total a ser pago é de " + preçofinal(preço, quantidade, total));
console.log("O total a ser pago é de " + preçofinal(preço, quantidade, total));

/*var numero1;
var numero2;

numero1 = parseInt(prompt("digite um numero"));

numero2 = parseInt(prompt("digite mais um numero"));

var resp = numero1 * numero2;

alert("A sua aréa é " + resp)
console.log("A sua aréa é " + resp)*/

/*var preço, quantidade, total = 0;

for (var q = 1; q <= 5; q++) {
	do {
		quantidade = parseInt(prompt("Qual a quantidade do produto " + q));
		preço = parseFloat(prompt("Qual o preço do produto " + q));

		total = total + (quantidade * preço);
		if (quantidade <= 0 || preço <= 0) {
			alert("Digite um numero maior que 0");
		}
	} while (quantidade <= 0 || preço <= 0);
}
alert("O total a ser pago é de " + total);
console.log("O total a ser pago é de " + total);
>>>>>>> 10059d9b83b792cad6ca2461709cd1fb069fc998
*/