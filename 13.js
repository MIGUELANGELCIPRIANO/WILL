//Clase Profesor;
//Definir una clase Profesor con sus propiedades y métodos.
//Las propiedades de la clase son: nombre, edad, cursos, certificados.
//El constructor de la clase recibe esos cuatro datos por parámetro en ese orden.
//Los métodos propios de la clase Profesor son:
//getCursos: retorna todos los cursos del profesor;
//addCurso: permite agregar un nuevo elemento al arreglo de cursos;
//countCertificados: retorna la cantidad de certificados del profesor;
//addCertificado: permite agregar un nuevo elemento al arreglo de certificados;

class Profesor {
    constructor(nombre, edad, cursos, certificados){
        this.nombre = nombre;
        this.edad = edad;
        this.cursos = cursos;
        this.certificados = certificados;
    }

    getCursos(){
        return this.cursos;
    }

    addCurso(curso){
        this.cursos.push(curso);
    }

    countCertificados(){
        return this.certificados.lenght;
    }

    addCertificado(nombre, entidad, año){
        this.certificados.push({nombre: nombre, entidad: entidad, año: año});
    }
}