//Ejercicio 3:
//Crear una función que retorne el primer elemento de un array. Si a la función le pasamos un segundo parámetro n (entero) nos retornará los n primeros elementos.
//Datos de prueba : 
//console.log(primer([7, 9, 0, -2])); 
//console.log(primer([],3));
//console.log(primer([7, 9, 0, -2],3));
//console.log(primer([7, 9, 0, -2],6));
//console.log(primer([7, 9, 0, -2],-3));
//Salida : 
//7
//[] 
//[7, 9, 0] 
//[7, 9, 0, -2] 
//[] 
function retornarElementos(numero,array) {
    let vector=[];
    let vector1=[];
    let conta=0;
    for (let i = 0; i < array.length; i++) {
        if(i<numero){
           vector[conta++]=array[i];
        }
    }
    return vector;
}
let arreglo=[7,9,0,-2];
numer=1;
console.log(retornarElementos(numer,arreglo));
console.log(retornarElementos(3,[]));
console.log(retornarElementos(3,arreglo));
console.log(retornarElementos(6,arreglo));
console.log(retornarElementos(-3,arreglo));