import { incremental } from './numeros';

// describe('Pruebas de Strings');
// it('Debe de regresar un string');


describe('Pruebas de números', () => {

    it( 'Debe de retornar 100, si el número ingresado es mayor a 100', () => {
        const resp = incremental(101);
        expect( resp  ).toBe(100);
    });


    it( 'Debe de retornar el numero ingresado + 1, si no es mayor a 100', () => {
        const resp = incremental(50);
        expect( resp  ).toBe(51);
    });


});
