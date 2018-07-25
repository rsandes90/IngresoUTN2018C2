function mostrar()
{

	var contador=1;
	var acumulador=0;
	var promedio;

	while(contador <= 5){

		acumulador = acumulador + parseInt(prompt("Ingrese un numero: "));
		contador = contador + 1;
	}

promedio = acumulador / 5;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN