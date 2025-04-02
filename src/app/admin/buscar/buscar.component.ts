import { Component } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent {
  nif: string = "";
  nombre: string = "";
  primerApellido: string = "";
  segundoApellido: string = "";
  dce: string = "";
}
