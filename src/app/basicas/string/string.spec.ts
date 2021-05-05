import { mensaje } from './string';
// describe('Pruebas de Strings');
// it('Debe de regresar un string');


describe('Pruebas de Strings', () => {

    it( 'Debe de regresar un string', () => {

        const resp = mensaje('Guillermo');

        expect( typeof resp  ).toBe('string');
    });


});
