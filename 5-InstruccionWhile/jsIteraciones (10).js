function mostrar()
{

    /*
        1-Suma de los negativos
        2-Suma de los positivos
        3-Cantidad de positivos
        4-Cantidad de negativos
        5-Cantidad de ceros
        6-Cantidad de números pares
        7-Promedio de positivos
        8-Promedios de negativos
        9-Diferencia entre positivos y negativos
    */

	var contPositivos=0;
	var contNegativos=0;
	var acumPositivos=0;
	var acumNegativos=0;
    var contCeros = 0;
    var contPares = 0;
    var promPositivos = 0;
    var promNegativos = 0;
    var diferencia;
    var numero;


do {

    numero = parseInt( prompt("Ingrese un numero: ") );

    if ( numero > 0) {

        contPositivos ++;
        acumPositivos = acumPositivos + numero;

    } else if ( numero < 0 ) {

        contNegativos ++;
        acumNegativos = acumNegativos + numero;

    } 
    else {

        contCeros ++;

    }

    if ( numero % 2 == 0) {

        contPares ++;

    }

    respuesta = prompt("Desea continuar?: ");

} while (respuesta != "no")	

if (contPositivos != 0) {

    promPositivos = acumPositivos / contPositivos;

}

if (contNegativos != 0) {

    promNegativos = acumNegativos / contNegativos;

}

diferencia = acumPositivos + acumNegativos;

document.write("1-Suma de los negativos: " + acumNegativos + "<br>");
document.write("2-Suma de los positivos: " + acumPositivos + "<br>");
document.write("3-Cantidad de positivos: " + contPositivos + "<br>");
document.write("4-Cantidad de negativos: " + contNegativos + "<br>");
document.write("5-Cantidad de ceros: " + contCeros + "<br>");
document.write("6-Cantidad de números pares: " + contPares + "<br>");
document.write("7-Promedio de positivos: " + promPositivos + "<br>");
document.write("8-Promedios de negativos: " + promNegativos + "<br>");
document.write("9-Diferencia entre positivos y negativos: " + diferencia + "<br>");


}//FIN DE LA FUNCIÓN