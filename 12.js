//Menor mayor;
//Escribe una función que reciba un arreglo de numeros enteros en orden aleatorio,
//y retorne un nuevo arreglo conteniendo el menor valor en la posición 0 y el mayor valor en la posición 1.
//menorMayor([4, 6, 1, 7, 15]);
//Debería retornar [1, 15];

function menorMayor(numeros){
    return [Math.min(...numeros), Math.max(...numeros)];
}