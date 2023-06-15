class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // OBTIENE EL VALOR DEL PRIMER ELEMENTO
  front() {
    return this.first;
  }
  // OBTENER EL ULTIMO VALOR DE LA COLA
  back() {
    // code...
  }
  // AGREGAR UN ELEMENTO AL FINAL
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  // REMOVER EL PRIMER ELEMENTO DE LA COLA
  dequeue() {
    // code...
  }
}

const colaDelSuper = new MyQueue();

console.log(colaDelSuper);

colaDelSuper.enqueue("Luis");
colaDelSuper.enqueue("Enrique");
colaDelSuper.enqueue("Adrian");
colaDelSuper.enqueue("Angela");
console.log(colaDelSuper);

console.log("La primer persona formada es: " + colaDelSuper.front().value);