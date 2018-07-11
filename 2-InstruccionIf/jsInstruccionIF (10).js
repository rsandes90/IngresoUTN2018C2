function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
 	var nota;

	nota = Math.floor((Math.random() * 10) + 1);

	if (nota == 9 || nota == 10){

		alert("Nota: "+nota+" - EXCELENTE");

	} else if (nota >= 4) {

		alert("Nota: "+nota+" - APROBÓ");

	} else {

		alert("Nota: "+nota+" - Vamos, la proxima se puede");

	}

}//FIN DE LA FUNCIÓN