function mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno = prompt("Ingresa el primer numero: ");
    numeroDos = prompt("Ingresa el segundo numero: ");

    if(parseInt(numeroUno) == parseInt(numeroDos)) {
        alert(numeroUno+numeroDos);
    } else if (parseInt(numeroUno) > parseInt(numeroDos)){
        resultado = numeroUno - numeroDos;
        alert("Resultado: "+resultado);        
    } else {
        resultado = parseInt(numeroUno) + parseInt(numeroDos);
        alert("Resultado: "+resultado);

        if (resultado > 10){
            alert("La suma es: "+resultado+" y supero el 10");
        }    
    }
}
