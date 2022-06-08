function cuadrosDialogo() {
	//alert("Hello from Alerta");
	//var edad = prompt("Ingrese su edad: ");
	//alert("La edad ingresada es: " + edad);
	var confirmacion = confirm("tas bien?");
	if (confirmacion) {
		alert("Todo correcto y yo que me alegro...");
	} else {
		alert("echale ganas carnal :(");
	}
}
function variablesSimples() {
	var valor1 = 5;
	var valor2 = prompt("Numero a multiplicar: ");
	var multiplicacion = valor1 * valor2;
	alert("La multiplicación es de: " + multiplicacion);
}
