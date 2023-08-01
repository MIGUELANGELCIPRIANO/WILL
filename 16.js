//Sum Array;
//Escribe una función que, a partir de un arreglo de números ordenados y un entero,
//devuelva true si alguna combinación de dos números cualesquiera sumados  da el total esperado,
//y false si ninguna combinación de dos números sumados da como resultado ese total.
//No es válido sumar el mismo número dos veces...
//sumArray([2, 5, 7, 10, 11, 15, 20], 4);
//Debería retornar false;

function sumArray(numeros, n){
    for(var i=0; i<numeros.length; i++){
        for(var j=0; j<numeros.length; j++){
            if(numeros[i]===numeros[j]){
                continue;
            }
            if(numeros[i]+numero[j]=== n){
                return true;
            }
        }
    }
    return false;
}