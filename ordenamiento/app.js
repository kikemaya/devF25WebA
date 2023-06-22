

//busqueda binaria

function busquedaBinaria( arr, elemento ){

    let inicio = 0;
    let fin = arr.length-1;

    while( inicio <= fin ){ 

        let medio = Math.floor( (inicio + fin) / 2 ); 

        if( arr[medio] === elemento){
            return medio;
        }

        if( elemento < arr[medio] ){
            fin = medio - 1;
        }else{
            inicio = medio + 1;
        }

    }

    return -1;

}

//const miArray = [1,2,3,4,5,6,7,9];
//const indice = busquedaBinaria( miArray, 62 );
//console.log(indice);


//Array.prototype.indexOf();
//Array.prototype.includes();


/* let result = miArray.includes(43);
console.log(result) */




//Algoritmos de ordenamiento



function bubbleSort( arr ){

    let len = arr.length;
    let cambiado = true;

    while(cambiado){

        cambiado = false;

        for(let i = 0; i < len -1; i++){
            if( arr[i] > arr[i+1]){
                //Realizar intercambio
                let temp = arr[i];
                arr[i] = arr[ i + 1];
                arr[ i + 1 ] = temp;
                cambiado = true;
            }
        }

    }

    return arr;

}

//Ejemplo de uso 
/* const miArray = [8,9,3,5,1,2,7,6];
console.log(`Array Original ${miArray}`);
console.log(`Array ordenado ${bubbleSort( miArray )}`) */

// sort();

/* const miArray = [8,9,3,51,1,2,72,36,571,6,3,16];
const nombres = ['Alberto','Ximena','Enrique','Hector','Rafael','Diego','Dayal'];

console.log( miArray.sort( function (a,b){return a -b} ) );

let letraB = 'B';
console.log( `Valor Unicode de A: ${'A'.charCodeAt(0)}` )
console.log( `Valor Unicode de a: ${'a'.charCodeAt(0)}` ) */




//Ordenamiento por selección: 



function selectionSort( arr ){

    let len = arr.length;

    for( let i = 0; i < len-1; i++){

        let minIndex = i;

        for(let j = i+1; j < len; j++){
            if( arr[j] < arr[minIndex] ){
                minIndex = j;
            }
        }

        if( minIndex !== i ){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}




let arr = [ 7, 6, 5, 17, 3, 18, 11 ];

console.log(`Array Original ${arr}`);
console.log(`Array ordenado ${selectionSort( arr )}`)