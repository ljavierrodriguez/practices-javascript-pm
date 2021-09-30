/**
 *  Crear una function que recibido un numero de carnet(rut) devuelva la letra o el codigo verificador del mismo.
 */

function devolverNumeroVerificador(rut){
    return rut[rut.length - 1];
    // return rut.split("-")[1]; // ['11.111.111', 'k']
    // return rut.slice(-1); // corta y devuelve el ultimo elemento del array de caracteres
    // return rut.substr(-1); // retorna el ultimo caracter del string
}


module.exports = {
    devolverNumeroVerificador
}