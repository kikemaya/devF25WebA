


const mascota = {
    nombre: 'Huesos',
    color: 'Café',
    edad: 2,
    comidas: ['carne','pescado','frutas'],
    direccion: {
        calle: 'av siempre viva',
        ciudad: 'springfield'
    },
    ladrar() {
        return "laskdflsdk"
    },
    hablar(){
        return `Hola yo me llamo ${this.nombre} y soy de color ${this.color}`
    }

}

//console.log(mascota.hablar())


/* const card = {
    nombre: 'andres',
    valor: 100,
    recargar(cant){
       this.valor =  this.valor + cant
    }
} */

/* function User (nombre, valor){
    this.nombre = nombre
    this.valor = valor
    this.recargar = function () {
        return `${this.nombre} tiene actualmente ${this.valor} de saldo.`
    }
}

const userUno = new User('Carlos',300);

console.log(userUno) */

/* class Pelicula {
    constructor(nombre, director, genero){
        this.nombre = nombre;
        this.director = director;
        this.genero = genero;
    }

    reproducir(){
        return `Reproduciendo ${this.nombre}`
    }

}


const pelicula1 = new Pelicula('Huesos','Barto','Comedia');
console.log(pelicula1.reproducir())

class Serie extends Pelicula {

    constructor(nombre, director, genero){
        super(nombre, director, genero);
        this.capitulos = 23;
    }

    reproducirSerie(){
        return `Estas viendo ${this.nombre}`
    }

}
const serie1 = new Serie('Dark','Adam','Suspenso');
console.log(serie1.capitulos) */



/* Crear una clase Mascota y crear 3 clases heredadas de Mascota. Todas las mascotas comen (método) pero cada mascota a nivel individual emite un sonido diferente  */




//Prototypes:

/* function Persona (name){
    this.nombre = name;
    this.valor = 100;
    this.recargar = function (cant){
       this.valor =  this.valor + cant
    }
} 
 */

/* pepe.nombre = 'David';
pepe.pais = 'Colombia';
pepe.pintar = function () {
    return `Estoy pintando en ${this.pais}`
} */
/* const pepe = new Persona('Pepe')
const jose = new Persona('Jose')
const pedro = new Persona('Pedro')
const anibal = new Persona('Anibal')

Persona.prototype.pais = this.pais;
Persona.prototype.pintar = function () {
    return `Estoy pintando en ${this.pais}`
}

console.log(pepe.pintar())
console.log(jose.pintar())
console.log(pedro)
console.log(anibal)
 */

/* 
let array = [1,24,'jose',false];
array.push(19)

function showArray1(array){
    for (let i = 0; i < array.length; i++) {
       console.log(array[i])       
    }
}
function showArray2(array){
    for (let i of array) {
       console.log(i)       
    }
}
showArray2(array); */


class Stack{
    #items = [];
    push(item){
        this.#items.push(item);
    }
    pop(){
        return this.#items.pop();
    }
    peek(){
        return this.#items[this.#items.length-1]
    }
    print(){
        this.#items.forEach(element => {
            console.log(element)
        });
    }
}

const stack = new Stack();
stack.push('Jose');
stack.push('Pedro');
stack.push('Camilo');

stack.pop()
console.log( 'Ultiimo elemento eliminado: ' + stack.pop() );
console.log( 'Ultiimo elemento eliminado: ' + stack.pop() );

stack.print();



/* console.log(stack.peek()) */








