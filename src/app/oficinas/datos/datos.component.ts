import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent {
  nombreOficina: string = '';
  consejo: string = '';
  localidad: string = '';
  direccion: string = '';
  codigoPostal: string = '';
  telefono: string = '';
  firmante: string = '';
  cargoFirmante: string = '';
  auxiliarAdministrativo: string = '';
  guardiaMayor: string = '';
  isBuscar: boolean = false;

  guardias: string[] = [
    'NOELIA REQUEJO VIEJO',
    'JUAN PÉREZ GÓMEZ',
    'MARÍA LÓPEZ SÁNCHEZ'
  ];

  selectedOficina: string = '';
  oficinas: string[] = [
    'OFICINA COMARCAL DE PRAVIA',
    'OFICINA COMARCAL DE TINEO',
    'OFICINA COMARCAL DE VALDES',
    'OFICINA COMARCAL DE BELMONTE'
  ];

  changeOficina() {
    console.log('Oficina seleccionada:', this.selectedOficina);
    this.isBuscar = true;
  }
  submitForm() {
    console.log('Formulario Enviado');
    console.log(this.nombreOficina, this.consejo, this.localidad, this.direccion, this.codigoPostal,
                this.telefono, this.firmante, this.cargoFirmante, this.auxiliarAdministrativo, this.guardiaMayor);
  }
}
