// 1. LOS OBJETOS LITERALES, SON UNA ESTRUCTURA DE DATOS
// QUE TAMBIEN SON CONOCIDOS COMO ARREGLOS ASOCIATIVOS O MAPAS


// 2. OBJETOS LITERALES !== DE LOS OBJETOS DE POO(PROGRAMACION ORIENTADA A OBJETOS)
const miCuentaDeAlumnoCinthya = {
  // AQUI COLOCO MI PAR DE CLAVES:VALORES/KEY:VALUE
  id: "rg43gthj356tg5hbt345",
  nombre: "Cinthya",
  apellido: "Garcia",
  grupo: 12,
  materias: ["Español", "Matematicas", "Fisica"],
  mostrarGrupo() {
    return `La alumna ${this.nombre}, se encuentra en el grupo numero ${this.grupo}`;
  }
};

// PODEMOS ACCEDER A LOS VALORES DE NUESTRAS PROPIEDADES Y MediaStreamAudioDestinationNode,
//   USANDO LA NOTACION DE PUNTO(DOT NOTATION) O LA NOTACION DE CORCHETES CUADRADOS(SQUARE BRACKET NOTATION)

console.log(miCuentaDeAlumnoCinthya.nombre);
console.log(miCuentaDeAlumnoCinthya.materias[1]);
console.log(miCuentaDeAlumnoCinthya.mostrarGrupo());
