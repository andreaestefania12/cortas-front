import { Component } from '@angular/core';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent {
  nombre: string = '';
  fechaIni: string = '';
  firma: string = '';

}
