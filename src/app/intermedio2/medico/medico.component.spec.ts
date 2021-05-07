import { MedicoComponent } from './medico.component';


import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('Medico Component', () => {

  let componente: MedicoComponent;

  let fixture: ComponentFixture<MedicoComponent>;


  beforeEach( () => {
    TestBed.configureTestingModule({
        declarations:[
          MedicoComponent
        ],
        // providers:[ ],
        // imports:[ ],
    });

    fixture = TestBed.createComponent( MedicoComponent );
    componente = fixture.componentInstance;


  } );



  it('', () => {

  });



});
