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
const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra");
};
console.log(obtenPacientesAsignadosAPediatria(pacientes));



// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.
const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes[] => {
  return pacientes.filter((pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10);
};
console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


// Queremos activar el protocolo de urgencia si cualquiera de los pacientes tiene un ritmo cardíaco superior a 100 
// pulsaciones por minuto y una temperatura corporal superior a 39 grados.
const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some((pacientes) => pacientes.temperatura > 39 && pacientes.frecuenciaCardiaca > 100);
};
console.log("Activar el protocolo?", activarProtocoloUrgencia(pacientes));


// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad 
// de pediatría a la de medico de familia.
const pacientesMedicoFamiliaYReasignados = (pacientes: Pacientes[]): Pacientes[] => {
  const listasUnidas: Pacientes[] = [];
  pacientes.forEach((pacientes) => {
    if (pacientes.especialidad === "Médico de familia" || pacientes.especialidad === "Pediatra") {
      listasUnidas.push(pacientes);
    }
  });
 return listasUnidas;
};
console.log(pacientesMedicoFamiliaYReasignados(pacientes));
 
 
  /*  let pacientesAsignadosAMedicoDeFamilia : Pacientes[] = [];
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Médico de familia") {
      pacientesAsignadosAMedicoDeFamilia = [pacientes[i], ...pacientesAsignadosAMedicoDeFamilia];
    }
  };

  let pacientesReasignados : Pacientes[] = [];
  for (let i=0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      pacientesReasignados = [pacientes[i], ...pacientesReasignados];
    }
  }

  let listaCompleta : Pacientes[] = [...pacientesAsignadosAMedicoDeFamilia, ...pacientesReasignados]

  return listaCompleta; */








/* 

// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría
const noHayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let comprobarSiNoHayPacientesPediatria = true;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Pediatra") {
      comprobarSiNoHayPacientesPediatria = false;
    }
  }
  return comprobarSiNoHayPacientesPediatria;
};
console.log("Puede irse a casa?", noHayPacientesDePediatria(pacientes));


// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología
interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
  let numPacientesMedicoDeFamilia = 0;
  let numPacientesPediatria = 0;
  let numPacientesCardiologia = 0;
  for (let i = 0; i < pacientes.length; i++) {
    if (pacientes[i].especialidad === "Médico de familia") {
      numPacientesMedicoDeFamilia++;
    }
    if (pacientes[i].especialidad === "Pediatra") {
      numPacientesPediatria++
    }
    if (pacientes[i].especialidad === "Cardiólogo") {
      numPacientesCardiologia++;
    }
  }
  return {
    medicoDeFamilia: numPacientesMedicoDeFamilia,
    pediatria: numPacientesPediatria,
    cardiologia: numPacientesCardiologia
  };
};
console.log(cuentaPacientesPorEspecialidad(pacientes));
 */