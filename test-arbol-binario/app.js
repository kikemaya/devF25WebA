
/* 
class Nodo {
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}

//Creación del árbol binario

let raiz = new Nodo( 5 );
raiz.left = new Nodo( 3 );
raiz.right = new Nodo( 8 ); 
raiz.left.left = new Nodo ( 1 );
raiz.left.right = new Nodo ( 4 );
raiz.right.left = new Nodo ( 7 );
raiz.right.right = new Nodo ( 9 );
raiz.left.left.right = new Nodo( 2 );
raiz.right.left.left = new Nodo( 6 );
raiz.right.right.right = new Nodo( 10 );


console.log( raiz ) */




/* //Encontrar un dato en el árbol binario

class Nodo {
    constructor(valor){
        this.valor = valor;
        this.left = null;
        this.right = null;
    }
}

//Función que encuentra un dato

function searchDato ( nodo, valorBuscado ){

    if( nodo === null || nodo.valor === valorBuscado){
        return nodo;
    }

    if( valorBuscado < nodo.valor ){
        return searchDato( nodo.left, valorBuscado );
    }else{
        return searchDato( nodo.right, valorBuscado );
    }

}


//Creación del árbol binario

let raiz = new Nodo( 5 );
raiz.left = new Nodo( 3 );
raiz.right = new Nodo( 8 ); 
raiz.left.left = new Nodo ( 1 );
raiz.left.right = new Nodo ( 4 );
raiz.right.left = new Nodo ( 7 );
raiz.right.right = new Nodo ( 9 );
raiz.left.left.right = new Nodo( 2 );
raiz.right.left.left = new Nodo( 6 );
raiz.right.right.right = new Nodo( 10 );


let valorBuscado = 72;
let result = searchDato( raiz, valorBuscado );


if( result === null ){
    console.log(`El valor ${valorBuscado} No se encontró en el árbol.`)
} else{
    console.log(`El valor ${valorBuscado} Si se encontró en el árbol.`)
}  
 */

//Buscar un valor en un array, si el valor se encuentra me regresas el indice del elemento encontrado, si no me regresas -1
function busquedaLineal(arr, elemento){

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === elemento){
            return i;
        }
    }

    return -1;

}

//Ejemplo de aplicación
let numeros = [4,2,7,1,5,3];
let indice = busquedaLineal(numeros, 9)

console.log(indice);

