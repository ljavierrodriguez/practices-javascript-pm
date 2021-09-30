const { devolverNumeroVerificador } = require('../ejercicio_1');

test('Validar que devolverNumeroVerificador es una funcion', () => {
    expect(typeof devolverNumeroVerificador).toBe('function');
});

test('Devolver numero verificador del numero de carnet (rut)', () => {
    let result = devolverNumeroVerificador('11.111.111-k');
    expect(result).toEqual('k');
});