import { Component } from '@angular/core';

export interface SolicitudElement {
  numeroExpediente: string;
  fechaAlta: string;
  nombrePropietario: string;
  nifSolicitante: string;
  finca: string;
  oficina: string;
  estado: string;
  solicitudWeb: string;
}

const ELEMENT_DATA: SolicitudElement[] = [
  {
    numeroExpediente: "TINEO-000408-2022",
    fechaAlta: "28/09/2022",
    nombrePropietario: "Ana Muíz País",
    nifSolicitante: "CBD650294K",
    finca: "Huerta de la casa",
    oficina: "OFICINA COMARCAL DE TINEO",
    estado: "PDTE INFORME DE GUARDA",
    solicitudWeb: "No"
  },
  {
    numeroExpediente: "TINEO-000401-2022",
    fechaAlta: "28/09/2022",
    nombrePropietario: "PAS1234-Nom PAS1234-Ape1 PAS1234-Ap2",
    nifSolicitante: "LLI463516Y",
    finca: "",
    oficina: "OFICINA COMARCAL DE TINEO",
    estado: "ARCHIVADO",
    solicitudWeb: "No"
  },
  {
    numeroExpediente: "TINEO-005533-2021",
    fechaAlta: "27/10/2021",
    nombrePropietario: "MARÍA DEL PILAR GONZÁLEZ VILLAREJO",
    nifSolicitante: "71873205E",
    finca: "",
    oficina: "OFICINA COMARCAL DE TINEO",
    estado: "RESUELTO AUTORIZADO",
    solicitudWeb: "Sí"
  },
  {
    numeroExpediente: "TINEO-000693-2021",
    fechaAlta: "29/03/2021",
    nombrePropietario: "NOMBRE APELLIDO1 APELLIDO2",
    nifSolicitante: "99999999R",
    finca: "",
    oficina: "OFICINA COMARCAL DE TINEO",
    estado: "PDTE INFORME DE GUARDA",
    solicitudWeb: "Sí"
  }
];


@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.scss']
})
export class ListadoSolicitudesComponent {
  displayedColumns: string[] = [
    'numeroExpediente',
    'fechaAlta',
    'nombrePropietario',
    'nifSolicitante',
    'finca',
    'oficina',
    'estado',
    'solicitudWeb',
    'accion'
  ];
  dataSource = ELEMENT_DATA;
}
