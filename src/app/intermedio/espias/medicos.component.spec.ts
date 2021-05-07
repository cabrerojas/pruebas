import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClient } from '@angular/common/http';
import { from, of } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    let http!: HttpClient;

    const servicio = new MedicosService(http);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe de cargar los médicos ', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {
            return from( [ medicos ] );
        });


        componente.ngOnInit();


        expect(componente.medicos.length).toBeGreaterThan(0);

    });


    it('Debe llamar al servidor para agregar un médico', () => {
        const espia = spyOn(servicio, 'agregarMedico').and
                    .callFake(() => of());

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();
    });


});
