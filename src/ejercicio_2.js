/**
 * Crear una function que reciba dos parametros nombre y apellido y los devulva al reves 
 */

function devolverNombreCompletoInvertido(param1, param2){
    /* let stringNombre = "";
    let stringApellido = "";

    for(let i = param1.length - 1; i >= 0; i--){
        stringNombre = stringNombre + param1[i];
    }

    for(let i = param2.length - 1; i >= 0; i--){
        stringApellido = stringApellido + param2[i];
    }

    let nombreCompletoAlreves =  stringApellido + " " + stringNombre; */

    /* let nombreCompletoAlreves = param1 + " " + param2;

    let result = nombreCompletoAlreves.split("").reverse().join("");
    console.log(result);
    return result; */

    return `${param1} ${param2}`.split("").reverse().join("");
}


module.exports = {
    devolverNombreCompletoInvertido
}