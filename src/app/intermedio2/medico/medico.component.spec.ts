import { MedicoComponent } from './medico.component';


import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('Medico Component', () => {

  let componente: MedicoComponent;

  let fixture: ComponentFixture<MedicoComponent>;


  beforeEach( () => {
    TestBed.configureTestingModule({
        declarations: [
          MedicoComponent
        ],
        // providers:[ ],
        // imports:[ ],
    });

    fixture = TestBed.createComponent( MedicoComponent );
    componente = fixture.componentInstance;


  } );



  it('Debe de crearse el componente', () => {

    expect( componente ).toBeTruthy();

  });

  it('Debe de retornar el nombre del médico', () => {

    const nombre = 'Angélica';
    const mensaje = componente.saludarMedico(nombre);

    expect( mensaje ).toContain(nombre);

  });



});
