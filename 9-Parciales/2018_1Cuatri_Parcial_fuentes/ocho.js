function mostrar()
{
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
    var flag = true;
    
    do {

        var letra = prompt("Ingrese una letra: ");
        var numero = parseInt( prompt("Ingrese un numero: "));

        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = prompt("Numero incorrecto. Reingrese un numero: ");
        }

        if (numero % 2 = 0) {
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

        if (numero < numMin || flag2 == true) {
            numMin = numero;
            letraMin = letra;

            flag2 = false;
        }

        respuesta = prompt("Quiere continuar?: ");

    } while(respuesta != 'si');


}
