import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  start: string;
  end: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Luis', start: '01/01/2025', end: '01/05/2025'},
  {position: 2, name: 'Andrea', start: '01/03/2025', end: '01/07/2025'},
  {position: 3, name: 'Andres', start: '01/04/2025', end: '01/09/2025'},
  {position: 4, name: 'Esteban', start: '01/05/2025', end: '01/06/2025'},
  {position: 5, name: 'Angel', start: '01/08/2025', end: '01/10/2025'},
];

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  displayedColumns: string[] = ['position', 'name', 'start', 'end', 'sign', 'action'];
  dataSource = ELEMENT_DATA;
}
