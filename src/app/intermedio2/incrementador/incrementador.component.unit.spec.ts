import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Componente Unit', () => {


    let componente: IncrementadorComponent;

    beforeEach( () => {
        componente = new IncrementadorComponent();
    });

    it('No debe de pasar de 100 el progreso', () => {

         componente.progreso = 100;

         componente.cambiarValor( 5 );

         expect( componente.progreso ).toBe(100);

    });


});
