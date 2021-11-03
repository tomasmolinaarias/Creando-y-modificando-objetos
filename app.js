console.log('hola')
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Consultorio {
    constructor(nombre, paciente) {
        this.nombre = nombre;
        this.paciente = paciente || [];
    }

    // buscarpaciente(nombre) {
    //     return this.paciente.find((PacientesTotal) => PacientesTotal.nombre === nombre)
    // }
}

Consultorio.prototype.buscarpaciente = function (nombre) {
    return this.paciente.find((PacientesTotal) => PacientesTotal.nombre === nombre)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
    //SETTER
    set setNombre(nombre) {
        this.nombre = nombre
    }
    set setEdad(edad) {
        this.edad = edad
    }
    set setRut(rut) {
        this.rut = rut
    }
    set setDiagnostico(diagnostico) {
        this.diagnostico = diagnostico
    }
    //GETTER
    get getNombre() {
        return this.nombre
    }
    get getEdad() {
        return this.edad
    }
    get getRut() {
        return this.rut
    }
    get getDiagnostico() {
        return this.diagnostico
    }

}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//PACIENTES<3
const paciente1 = new Paciente(`elon`, 101, `1,002,473-0`, `diarrea verbal`)
const paciente2 = new Paciente(`luis`, 23, `22,875,268-1`, `diabete`)
const paciente3 = new Paciente(`felipe`, 203, `2,950,051-7`, `tumor benigno`)
const paciente4 = new Paciente(`juan`, 14, `28,390,914-K`, `virus T`)
const paciente5 = new Paciente(`pedro`, 19, `32,026,169-4`, `diarrea`)
console.log(paciente1.getNombre)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let PacientesTotal = [paciente1, paciente2, paciente3, paciente4, paciente5]
console.log(PacientesTotal)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let Consultorio1 = new Consultorio('santiago', PacientesTotal)
console.log(Consultorio1)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Consultorio1.buscarpaciente('pedro'))