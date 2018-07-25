function mostrar()
{

var sexo = prompt("ingrese f ó m ."); // prompt("ingrese f ó m .").toLowerCase pasa la variable a minuscula 

while  (sexo != 'f' && sexo != 'm') {

    sexo = prompt("Sexo incorrecto. Ingrese un sexo valido");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN