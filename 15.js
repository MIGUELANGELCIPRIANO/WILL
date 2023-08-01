//Vegan;
//Escribe una función que, recibiendo por parámetro un objeto que contiene a todos los invitados,
//retorne un número indicando cuántos de ellos son veganos.

var invitados = {
    Luna:{
        vegan: false,
    },
    Sebas:{
        vegan: false,
    },
    Marce:{
        vegan: false,
    },
    Nicky:{
        vegan: true,
    },
};

function vegan(invitados){
    var suma = 0;
    for(var prop in invitados){
        if(invitados[prop].vegan == true){
            suma ++;
        }
    }
    console.log (suma);
}