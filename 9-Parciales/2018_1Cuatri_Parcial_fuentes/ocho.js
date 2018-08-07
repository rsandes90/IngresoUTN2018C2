function mostrar()
{
    /*
    a) La cantidad de números pares. 
    b) La cantidad de números impares. 
    c) La cantidad de ceros. 
    d) El promedio de todos los números positivos ingresados. 
    e) La suma de todos los números negativos.
    f) El número y la letra del máximo y el mínimo.
    */
    
    var respuesta;    
    var contPares = 0;
    var contImpares = 0;
    var contCeros = 0;
    var contPositivos = 0;
    var acumPositivos = 0;
    var acumNegativos = 0;
    var numMax;
    var letraMax;
    var numMin;
    var letraMin;
    var promedioPositivos;
    var flag = true;
    
    do {

        var letra = prompt("Ingrese una letra: ");
        var numero = parseInt( prompt("Ingrese un numero: "));

        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = prompt("Numero incorrecto. Reingrese un numero: ");
        }

        if (numero % 2 == 0) {
            contPares ++;
        } else {
            contImpares ++;
        }

        if (numero == 0) {
            contCeros ++;
        } else if (numero > 0) {
            acumPositivos = acumPositivos + numero;
            contPositivos ++;
        } else {
            acumNegativos = acumNegativos + numero;
        }

        if (numero > numMax || flag == true) {
            numMax = numero;
            letraMax = letra;

        }

        if (numero < numMin || flag == true) {
            numMin = numero;
            letraMin = letra;

            flag = false;
        }

        respuesta = prompt("Quiere continuar?: ");

    } while(respuesta != 'no')


    /*
    document.write("Cantidad de pares " + contPares + "</br>" +
    " Cantidad de impares " + contImpares + "</br>" +
    " Cantidad de ceros " + contCeros + "</br>" +
    " Promedio de positivos " + acumPositivo / contPositivos + "</br>" +
    " Suma de negativos " + acumNegativos + "</br>" +
    " Numero maximo " + numMax + "</br>" +
    " Letra maxima " + letraMax + "</br>" +
    " Numero minimo " + numMin + "</br>" +
    " Letra minima " + letraMin + "</br>" );
    */

    promedioPositivos = acumPositivos / contPositivos;

    document.write("1-Cantidad de pares: " + contPares + "<br>");
    document.write("2-Cantidad de impares: " + contImpares + "<br>");
    document.write("3-Cantidad de ceros: " + contCeros + "<br>");
    document.write("4-Promedio de positivos: " + promedioPositivos + "<br>");
    document.write("5-Suma de negativos: " + acumNegativos + "<br>");
    document.write("6-Numero maximo: " + numMax + "<br>");
    document.write("7-Letra maxima: " + letraMax + "<br>");
    document.write("8-Numero minimo: " + numMin + "<br>");
    document.write("9-Letra minima: " + letraMin + "<br>");


}
