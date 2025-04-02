import { Component } from '@angular/core';

@Component({
  selector: 'app-editar-guarda',
  templateUrl: './editar-guarda.component.html',
  styleUrls: ['./editar-guarda.component.scss']
})
export class EditarGuardaComponent {
  nombre: string = '';
  dni: string = '';
  baja: string = '';
  selectedOficina: string = '';
  oficinas: string[] = [
    'OFICINA COMARCAL DE PRAVIA',
    'OFICINA COMARCAL DE TINEO',
    'OFICINA COMARCAL DE VALDES',
    'OFICINA COMARCAL DE BELMONTE'
  ];
}
