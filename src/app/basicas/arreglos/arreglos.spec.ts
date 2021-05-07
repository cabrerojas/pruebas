import { obtenerRobots } from './arreglos';

xdescribe('Pruebas de arreglos', () => {

    it( 'Debe de retornar al menos 3 robots', () => {
        const resp = obtenerRobots();
        expect( resp.length ).toBeGreaterThanOrEqual(3);
    });

    it( 'Debe contener Megaman y Optimus prime', () => {
        const resp = obtenerRobots();
        expect( resp ).toContain('Optimus prime');
        expect( resp ).toContain('Megaman');
    });


});
