import { Component } from '@angular/core';

@Component({
  selector: 'app-informe-ayuntamientos',
  templateUrl: './informe-ayuntamientos.component.html',
  styleUrls: ['./informe-ayuntamientos.component.scss']
})
export class InformeAyuntamientosComponent {
  fechaIni: Date | null = null;
  fechaFin: Date | null = null;
  selectedOficina: string = '';
  consejos: string[] = [
    'TODOS',
    'ALLANDE',
    'ALLER',
    'AMIEVA'
  ];
}
