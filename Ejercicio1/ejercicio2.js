//Ejercicio 2:
//Dada una cantidad de dinero (entera) y un las monedas posibles, devolver la misma cantidad de dinero en monedas.
//Ejemplo : dameMonedas(46, [25, 10, 5, 2, 1])
//Donde 46 es la cantidad de plata. y 25, 10, 5, 2, 1 son las monedas que existen. 
//Salida : 25, 10, 10, 1

function cantidadMonedas(valor) {

    let resto = valor;
    const moneda = [];

    while (resto != 0) {
    
        if (resto > 25) {
            moneda.push(25);
            resto -= 25;
        } else if (resto > 10) {
            moneda.push(10);
            resto -= 10;
        } else if (resto > 5) {
            moneda.push(5);
            resto -= 5;
        } else if (resto > 2) {
            moneda.push(2);
            resto -= 2;
        } else if (resto >= 1) {
            moneda.push(1);
            resto -= 1;
        }

    }
    return moneda;
}
console.info(cantidadMonedas(46));
