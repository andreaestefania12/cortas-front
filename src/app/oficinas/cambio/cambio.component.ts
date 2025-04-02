import { Component } from '@angular/core';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.scss']
})
export class CambioComponent {
  selectedOficina: string = '';
  oficinas: string[] = [
    'OFICINA COMARCAL DE PRAVIA',
    'OFICINA COMARCAL DE TINEO',
    'OFICINA COMARCAL DE VALDES',
    'OFICINA COMARCAL DE BELMONTE'
  ];

  changeOficina() {
    console.log('Oficina seleccionada:', this.selectedOficina);
  }
}
