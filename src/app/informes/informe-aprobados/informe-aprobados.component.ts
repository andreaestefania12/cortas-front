import { Component } from '@angular/core';

@Component({
  selector: 'app-informe-aprobados',
  templateUrl: './informe-aprobados.component.html',
  styleUrls: ['./informe-aprobados.component.scss']
})
export class InformeAprobadosComponent {
  fechaIni: Date | null = null;
  fechaFin: Date | null = null;
  selectedOficina: string = '';
  selectedEspecie: string = '';
  consejos: string[] = [
    'TODOS',
    'ALLANDE',
    'ALLER',
    'AMIEVA'
  ];
  especies: string[] = [
    'TODOS',
    'Abedul',
    'Acebo'
  ];
}
