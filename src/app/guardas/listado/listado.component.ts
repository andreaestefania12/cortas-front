import { Component } from '@angular/core';

export interface GuardaElement {
  name: string;
  position: number;
  dni: string;
  end: string;
  office: string;
}

const ELEMENT_DATA: GuardaElement[] = [
  {position: 1, name: 'Luis', dni: '158453F', end: '01/05/2025',office: 'SERVICIO DE MONTES'},
  {position: 2, name: 'Andrea', dni: '1247E3G', end: '01/07/2025',office: 'SERVICIO DE MONTES'},
  {position: 3, name: 'Andres', dni: '137546G', end: '01/09/2025',office: 'SERVICIO DE MONTES'},
  {position: 4, name: 'Esteban', dni: '234535D', end: '01/06/2025',office: 'SERVICIO DE MONTES'},
  {position: 5, name: 'Angel', dni: '167932D', end: '01/10/2025',office: 'SERVICIO DE MONTES'},
];

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  displayedColumns: string[] = ['position', 'name', 'dni', 'end', 'office', 'delete'];
  dataSource = ELEMENT_DATA;

  confirmDelete() {
    const confirmation = confirm('¿Estás seguro de que deseas borrar el guarda?');
    if (confirmation) {
      console.log('El guarda ha sido borrado');
    } else {
      console.log('El borrado ha sido cancelado');
    }
  }

}
