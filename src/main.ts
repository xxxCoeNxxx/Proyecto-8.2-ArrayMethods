type Especialidad = "Médico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Médico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Médico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Médico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];


// a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría
const obtenPacientesAsignadosAPediatria = (paciente: Pacientes[]): Pacientes[] => {
  return paciente.filter((paciente) => paciente.especialidad === "Pediatra");
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));


// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (paciente: Pacientes[]): Pacientes[] => {
  return paciente.filter((paciente) => paciente.especialidad === "Pediatra" && paciente.edad < 10);
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


// Queremos activar el protocolo de urgencia si cualquiera de los pacientes tiene un ritmo cardíaco superior a 100 
// pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (paciente: Pacientes[]): boolean => {
  return paciente.some((paciente) => paciente.temperatura > 39 && paciente.frecuenciaCardiaca > 100);
};
console.log("Activar el protocolo?", activarProtocoloUrgencia(pacientes));


// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad 
// de pediatría a la de medico de familia.
const pacientesMedicoFamiliaYReasignados = (paciente: Pacientes[]): Pacientes[] => {
  const listasUnidas: Pacientes[] = [];
  paciente.forEach((paciente) => {
    if (paciente.especialidad === "Médico de familia" || paciente.especialidad === "Pediatra") {
      listasUnidas.push(paciente);
  /*     PARA REASIGNAR ESPECIALIDAD
      listasUnidas.push({
        ...pacientes,
        especialidad: "Médico de familia"
      }); */
    }
  });
 return listasUnidas;
};
console.log(pacientesMedicoFamiliaYReasignados(pacientes));
 
 
// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista
// hay algún paciente asignado a pediatría.
const noHayPacientesDePediatria = (paciente: Pacientes[]): boolean => {
  return paciente.some((paciente) => paciente.especialidad === "Pediatra");
};
console.log("Puede irse a casa?", noHayPacientesDePediatria(pacientes));


// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a Cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const totalPacientesFiltradosPorEspecialidad = (paciente : Pacientes[], especialidad : Especialidad) : number => {
  return paciente.reduce((acc, paciente) => {
    if(paciente.especialidad === especialidad) {
      return ++acc;
    }
    else {
      return acc;
    }
  },0);
} 

const cuentaPacientesPorEspecialidad = (paciente: Pacientes[]): NumeroPacientesPorEspecialidad => {
  return {
    medicoDeFamilia: totalPacientesFiltradosPorEspecialidad (paciente, "Médico de familia"),
    pediatria: totalPacientesFiltradosPorEspecialidad (paciente, "Pediatra"),
    cardiologia:totalPacientesFiltradosPorEspecialidad (paciente, "Cardiólogo"),
  }
};
console.log(cuentaPacientesPorEspecialidad(pacientes));
