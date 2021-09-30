const { devolverNombreCompletoInvertido } = require('../ejercicio_2');

test('Validar que devolverNombreCompletoInvertido es una funcion: ', () => {
    expect(typeof devolverNombreCompletoInvertido).toBe('function');
});

test('Devolver nombre completo al reves: ', () => {
    let result = devolverNombreCompletoInvertido('luis', 'rodriguez');
    expect(result).toEqual('zeugirdor siul');
});