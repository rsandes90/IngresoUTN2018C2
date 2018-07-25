function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';


while (respuesta = 'si') {

	var numero = parseInt(prompt("Ingrese un numero: "));

	if(numero >= 0) {
		positivo = positivo + numero;
	} 
	else {
		negativo = negativo * numero;
	}

	prompt("Queres ingresar otro numero?: ");
}	

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN