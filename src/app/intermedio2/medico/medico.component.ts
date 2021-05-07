import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {


  medicos: any[] = [];


  constructor( private medicosService: MedicoService ) { }

  ngOnInit(): void {
  }

  saludarMedico( nombre: string): string {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this.medicosService.getMedicos()
    // tslint:disable-next-line: deprecation
    .subscribe( (medicos) => this.medicos = medicos
    );

  }

}
