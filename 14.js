//Cuántos online;
//Escribe una función que, a partir de un objeto donde cada propiedad representa un usuario,
//permita identificar cuántos de esos usuarios están online(es decir, cuya propiedad online tiene valor true).

var usuarios = {
    toni:{
        edad: 33,
        online: true,
    },
    emi:{
        edad: 25,
        online: true,
    },
    fran:{
        edad: 25,
        online: false,
    },
    agus:{
        edad: 24,
        online: false,
    },
}

function cuantosOnline(usuarios){
    var suma = 0;
    for(var prop in usuarios){
        if(usuarios[prop].online == true){
            suma ++;
        }
    }
    return suma;
}