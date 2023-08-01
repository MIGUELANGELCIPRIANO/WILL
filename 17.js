//Lobo, ¿está?;
//La función loboEstaONoEsta debe retornar true o false dependiendo de si la palabra 'lobo' en minúsculas,
//está dentro del arreglo o no;
//La función loboEstaONoEsta recibe un arreglo de strings y números como parámetro.
//loboEstaONoEsta(['hola', 1, 3, 'palabra']);
//debería devolver false,
//loboEstaONoEsta(['hola', 'buena', 'lobo', 4, 5]);
//debería devolver true;

function loboEstaONoEsta(array){
    for(var i=0; i<array.length; i++){
        if(array[i] === 'lobo'){
            return true;
        }
    }
    return false;
}