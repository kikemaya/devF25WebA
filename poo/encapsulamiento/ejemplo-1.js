class Student {
  // SE CONSTRUYEN LOS ATRIBUTOS/PROPIEDADES DE MI CLASE
  constructor(name, classes, address, secretNumber, username) {
    this.name = name;
    this.classes = classes;
    this._username = username;
    this._address = address;
    this._secretNumber = secretNumber;
  };

  // GETTERS, SE USAN PARA DAD PRIVADOBTENER UNA PROPIEA Y APLICAR LOGICA EN ELLA,
  // DE MODO QUE NO ACCEDAMOS NUNCA A ELLA DE FORMA DIRECTA
  get getAddress() {
    return this._address;
  };

  get getPaymentForExam() {
    const billing = this._secretNumber * 2;
    return `Estimado ${this.name}, usted tiene que pagar $${billing} para presentar su examen`;
  }

  // SI QUEREMOS MODIFICAR EL VALOR DE UNA PROPIEDAD PRIVADA, USAMOS SETTERS
  set validateUserName(newUserName) {
    if (newUserName === "spiderman" || newUserName === "usuarioMaldito") {
      console.log("No haga eso joven, lo estoy viendo");
      return;
    } else {
      this._username = newUserName;
      console.log(newUserName);
      return newUserName;
    }
  }
};

const emilio = new Student("Emilio", ["History", "Math", "Physics"], "Dillion Av, etc", 150,);

console.log(emilio.getAddress);
console.log(emilio.getPaymentForExam);

emilio.validateUserName = "spiderman";