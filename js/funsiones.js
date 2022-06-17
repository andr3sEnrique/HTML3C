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
function cuadrosdialogos() {
	//alert("Holo desde Alerta");
	//var edad = prompt("Edad");
	//alert("La edad ingresada es: " + edad);

	var confirmacion = confirm("tas bien?");
	if (confirmacion) {
		alert("Todo correcto, todo perfecto ... ");
	} else {
		alert("Juguito de chale :(");
	}
}

function variablesSimples() {
	var valor1 = 5;
	var valor2 = prompt("Numero a multiplicar");
	var multiplicacion = valor1 * valor2;
	alert("La multilpicacion : " + multiplicacion);
}

function obtenerPorId() {
	var contenido = document.getElementById("id-h1");
	console.log(contenido);
	alert(contenido.innerHTML);
	contenido.style.color = "blue";
	contenido.style.backgroundColor = "black";
}

function obtenerPorNombre() {
	var elemento = document.getElementsByName("textito");
	console.log(elemento);
	alert(elemento[1].innerHTML);
	elemento[2].style.color = "red";
	elemento[0].style.color = "blue";
}

function obtenerPorClase() {
	var elemento = document.getElementsByClassName("verdecito");
}
//eventos
function mensajeEnClic() {
	alert("EVENT ON CLIC");
}

function mensajeSobre() {
	alert("Evento sobre");
}

function mensajeDeCarga() {
	alert("Olovorgo xD...");
	var elemento = document.getElementsByTagName("body");
	console.log(elemento);
	elemento[0].style.backgroundColor = "bisque";
}

//ecmaScript
function declararVar() {
	var nombre = "WEB";
	if (true) {
		var nombre = "BD";
		console.log(nombre);
	}
	console.log(nombre);
}

function declararLet() {
	let nombre = "WEB";
	if (true) {
		let nombre = "BD";
		console.log(nombre);
	}
	console.log(nombre);
}

function declararCons() {
	const nombre = "WEB";
	if (true) {
		const nombre = "BD";
		console.log(nombre);
	}
	console.log(nombre);
}

function declararObj() {
	const usuario = {
		nombre: "Andrew",
		apellido: "Ortiz",
		edad: 19,
		colorF: "azul",
	};
	console.log(usuario);
	console.log(usuario.apellido);
	usuario.nombre = "Enrique";
	console.log(usuario);
	Object.freeze(usuario);
	usuario.nombre = "Tom";
	console.log(usuario);
}
