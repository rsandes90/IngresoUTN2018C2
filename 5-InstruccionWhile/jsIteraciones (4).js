function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 10 || isNaN(numero)){

		numero = prompt("Numero invalido. Ingrese un numero entre 0 y 10");
	}

	alert("Numero ingresado correctamente");

}//FIN DE LA FUNCIÓN