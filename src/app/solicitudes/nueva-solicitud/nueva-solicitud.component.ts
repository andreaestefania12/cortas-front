import { Component } from '@angular/core';

@Component({
  selector: 'app-nueva-solicitud',
  templateUrl: './nueva-solicitud.component.html',
  styleUrls: ['./nueva-solicitud.component.scss']
})
export class NuevaSolicitudComponent {
  // Campos del formulario
  estado: string = '';
  tipoSolicitud: string = '';

  numeroExpediente: string = '';

  // Datos del solicitante
  nifSolicitante: string = '';
  nombreSolicitante: string = '';
  telefonoSolicitante: string = '';
  correoSolicitante: string = '';
  pasaporteSolicitante: string = '';
  razonSocialSolicitante: string = '';
  telefonoFijoSolicitante: string = '';

  // Datos del representante
  nifRepresentante: string = '';
  nombreRepresentante: string = '';
  telefonoRepresentante: string = '';
  faxRepresentante: string = '';
  correoRepresentante: string = '';
  acreditacionFile?: File;

  // Domicilio de notificaciones
  pais: string = 'ESPAÑA';
  consejo: string = 'Seleccionar';
  provincia: string = '';
  provincias: string[] = ['ASTURIAS', 'MADRID', 'BARCELONA']; // Puedes extender esta lista
  tipoVia: string = 'Seleccionar';
  localidad: string = '';
  direccion: string = '';
  numero: string = '';
  escalera: string = '';
  puerta: string = '';
  codigoPostal: string = '';
  piso: string = '';
  bloque: string = '';

  // Datos del Comprador
  nifComprador: string = '';
  fechaInhabilitacion: string = '';
  nombreComprador: string = '';
  razonSocialComprador: string = '';
  provinciaComprador: string = '';
  localidadComprador: string = '';
  direccionComprador: string = '';
  numeroComprador: string = '';
  telefonoComprador: string = '';
  correoComprador: string = '';
  documentoAcreditativo: File | null = null;  // Archivo acreditativo
  consejoComprador: string = '';
  tipoViaComprador: string = '';
  

  // Datos de la Finca
  concejoFinca: string = '';
  lugarFinca: string = '';
  superficieFinca: number = 0;

  // Datos de las Parcelas
  zonaParcela: string = '';
  poligonoParcela: string = '';
  recintoParcela: string = '';
  superficieTotalParcela: number = 0;

  // Aceptar croquis (si procede)
  aceptarCroquis: File | null = null; // Archivo croquis

  // Datos del Aprovechamiento
  aprovechamientoCambio: string = ''; // Sí o No

  concejos: string[] = ['Concejo 1', 'Concejo 2', 'Concejo 3']; // Lista de concejos


}
