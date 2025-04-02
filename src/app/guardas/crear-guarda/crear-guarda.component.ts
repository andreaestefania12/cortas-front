import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-guarda',
  templateUrl: './crear-guarda.component.html',
  styleUrls: ['./crear-guarda.component.scss']
})
export class CrearGuardaComponent {
  nombre: string = '';
  dni: string = '';
  selectedOficina: string = '';
  oficinas: string[] = [
    'OFICINA COMARCAL DE PRAVIA',
    'OFICINA COMARCAL DE TINEO',
    'OFICINA COMARCAL DE VALDES',
    'OFICINA COMARCAL DE BELMONTE'
  ];
}
