//Mayor menor;
//Escribe una función que reciba un arreglo de numeros enteros en orden aleatorio,
//y retorne un nuevo arreglo conteniendo solamente el mayor y el menor valor, en ese orden.
//mayorMenor([9, 17, 6, 2, 4]);
//Debería retornar [17, 2];

function mayorMenor(numeros){
    return [Math.max(...numeros), Math.min(...numeros)];
}

