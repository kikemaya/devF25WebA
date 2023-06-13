class Animal {
  constructor(name) {
    this.name = name;
  };
  sound() {
    return "Sonido generico de animal";
  };
};

class Perro extends Animal {
  constructor(name) {
    super(name);
  };
  sound() {
    return "Guau, ashies soy Ficha";
  };
};

const ficha = new Perro("Ficha");
console.log(ficha.sound());