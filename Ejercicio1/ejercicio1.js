//Ejercicio 1:
//Crear una función que acepta una oración de tipo string como parámetro y busca  la palabra que tiene mayor longitud.
//Ejemplo entrada: 'El desarrollo Web es entretenido' 
//Salida: 'entretenido' 


function buscarPalabra (oracion){
const palabra = oracion.split(" ");// array del tipo ["El","Desarollo"...]
let lml= " ";
for (let p in palabra){
    const pa = palabra[p];
    if (lml.length < pa.length){
        lml=pa;
    }
}return lml;

}

console.info(buscarPalabra("El desarrollo Web es entretenido"));