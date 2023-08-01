//La funcion recibe un objeto "persona".
// de la forma: {nombre: 'Lionel', apellido: 'Messi', invitado: true}
// Si tiene la propiedad "invitado" y, además, tiene las propiedades "nombre" y "apellido", tomar esos valores y retorna: 
// "Lionel Messi, un gusto tenerlo nuevamente! Bienvenido". 
// Si tiene la propiedad "invitado" y solo tiene la propiedad "apellido", retornar: 
// "Bienvenido Sr. Messi".
// Si tiene la propiedad "invitado" y solo tiene la propiedad "nombre", retornar: 
// "Hola Lionel, tu mesa está lista". 
// En caso de que no tenga la propiedad "invitado" retornar: 
// "Disculpe señor, no está invitado a la fiesta".

var persona = {
  nombre: '',
  apellido: 'Messi',
  invitado: true,
}

function saludo(persona) {
  var { nombre, apellido, invitado } = persona; 

  if (nombre && apellido && invitado) {
      console.log (`${nombre} ${apellido}, un gusto tenerlo nuevamente! Bienvenido`)
    } else if (apellido && invitado) {
        console.log (`Bienvenido  Sr. ${apellido}`)
    } else if (nombre && invitado) {
      console.log (`Hola ${nombre} tu mesa esta lista`)
    } else {
      console.log (`Disculpe señor, no está invitado a la fiesta`)
    }
  }

saludo(persona);

