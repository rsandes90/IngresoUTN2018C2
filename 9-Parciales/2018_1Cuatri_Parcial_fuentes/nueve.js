function mostrar()
{
    /*
    a) La cantidad de temperaturas pares. 
    b) La marca del producto más pesado 
    c) La cantidad de productos que se conservan a menos de 0 grados. 
    d) El promedio del peso de todos los productos.	
    f) El peso máximo y el mínimo.
    */

    var marca;
    var peso;
    var temperatura;
    var respuesta;
    var contPares = 0;
    var flag = true;
    var pesoMasPesado;
    var marcaMasPesado;
    var contTempMenorACero = 0;
    var contProductos = 0;
    var acumPeso = 0;
    var pesoMax;
    var pesoMin;
    var promedioPeso;

    do {
        marca = prompt("Ingrese la marca: ");
        peso  = parseInt(prompt("Ingrese el peso: "));

        while (peso < 1 || peso > 100 || isNaN(peso)) {
            peso = parseInt(prompt("Peso incorrecto. Ingrese un nuevo peso: "));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura: "));
        while (temperatura < -30 || temperatura > 30 || isNaN(temperatura)) {
            temperatura = parseInt(prompt("Temperatura incorrecta. Ingrese una nueva temperatura: "));
        }

        if(temperatura % 2 == 0) {
            contPares ++;
        }

        if (peso > pesoMasPesado || flag == true){
            marcaMasPesado = marca;
        }

        if (temperatura < 0) {
            contTempMenorACero ++;
        }

        if (peso > pesoMax || flag == true) {
            pesoMax = peso;
        }

        if (peso < pesoMin || flag == true) {
            pesoMin = peso;
            
            flag = false;
        }

        contProductos ++;
        acumPeso = acumPeso + peso;

        respuesta = prompt("Desea seguir ingresando?: ");

    } while (respuesta != 'no')


    promedioPeso = acumPeso / contProductos;

    document.write("Cantidad de temperaturas pares: "+ contPares +"</br>");
    document.write("Marca del producto más pesado: "+ marcaMasPesado +"</br>");
    document.write("Cantidad de productos que se conservan a menos de 0 grados: "+ contTempMenorACero + "</br>");
    document.write("Promedio del peso de todos los productos: "+ promedioPeso + "</br>");
    document.write("Peso maximo: "+ pesoMax + "</br>");
    document.write("Peso minimo: "+ pesoMin + "</br>");

}