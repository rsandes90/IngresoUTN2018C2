function mostrar()
{
    var acumNotas = 0;
    var promedioNotas = 0;
    var notaBaja; 
    var sexoBajo;
    var varonesAprobados = 0;
    var flag = true;

    for ( i = 0; i < 5; i ++){

    var nota = parseInt( prompt("Ingrese una nota: ") );
    var sexo = prompt("Ingrese un sexo: ");    

    while (nota < 0 || nota > 10){
        nota = prompt("Nota incorrecta. Ingrese la nota nuevamente: ");
    }

    while (sexo != 'm' && sexo != 'f'){
        sexo = prompt("Sexo incorrecto. Ingrese el sexo nuevamente: ");
    }

    acumNotas = acumNotas + nota;

    if (nota < notaBaja || flag == true) {
        notaBaja = nota;
        sexoBajo = sexo;

        flag = false;
    }

    if (nota >= 6 && sexo == 'm'){
        varonesAprobados ++;
    }

 }

 promedioNotas = acumNotas / 5;

 alert(" Promedio de Notas: " + promedioNotas + 
       "\n Nota mas baja: " + notaBaja + 
       "\n Sexo mas bajo: " + sexoBajo + 
       "\n Cantidad de varones aprobados: " + varonesAprobados);

}
