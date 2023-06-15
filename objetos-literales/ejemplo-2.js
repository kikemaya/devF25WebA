const luis = {
  // IDEALMENTE, SI LE PONES "" A UN ATRIBUTO, PARA MANTENER
  // TU CODIGO UNIFORME, TIENES QUE AÑADIRSELAS A LOS DEMAS ATRIBUTOS
  "id": "3h24h324h3j2k",
  "primer nombre": "Luis",
  "apellido": "Martinez",
  "intereses": ["Motocicletas", "Perros", "Mermelada"],
  "zapato1": "oxford",
  "zapato2": "Crocs",
  "zapato16": "Botas tribaleras"
};

// PARA ACCEDER A LOS VALORES QUE TIENE ESPACIOS, TENGO QUE HACERLO
// DE LA SIGUIENTE FORMA
console.log(luis["primer nombre"]);

// LA SQUARE BRACKET NOTATION, NOS PERMITE AÑADIR UN POCO MAS
// DE LOGICA A NUESTRAS CONSULTAS A OBJETOS LITERALES
console.log(luis["zapato" + 16]);