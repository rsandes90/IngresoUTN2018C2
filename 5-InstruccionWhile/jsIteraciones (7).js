function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == 'si') {

		acumulador = acumulador + parseInt(prompt("Ingrese un numero: "));
		contador = contador + 1;
		respuesta = prompt("Queres ingresar otro numero?: ");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN