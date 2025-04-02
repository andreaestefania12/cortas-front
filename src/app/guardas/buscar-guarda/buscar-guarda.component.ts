import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar-guarda',
  templateUrl: './buscar-guarda.component.html',
  styleUrls: ['./buscar-guarda.component.scss']
})
export class BuscarGuardaComponent {
  dni: string = '';
  selectedOficina: string = '';
  oficinas: string[] = [
    'OFICINA COMARCAL DE PRAVIA',
    'OFICINA COMARCAL DE TINEO',
    'OFICINA COMARCAL DE VALDES',
    'OFICINA COMARCAL DE BELMONTE'
  ];
}
