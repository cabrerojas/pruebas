import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';


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


});
