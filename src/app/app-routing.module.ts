import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './admin/crear/crear.component';
import { ListadoComponent } from './guardas/listado/listado.component';
import { CambioComponent } from './oficinas/cambio/cambio.component';
import { DatosComponent } from './oficinas/datos/datos.component';
import { GestionComponent } from './admin/gestion/gestion.component';
import { EditarComponent } from './admin/editar/editar.component';
import { BuscarComponent } from './admin/buscar/buscar.component';
import { CrearGuardaComponent } from './guardas/crear-guarda/crear-guarda.component';
import { EditarGuardaComponent } from './guardas/editar-guarda/editar-guarda.component';
import { BuscarGuardaComponent } from './guardas/buscar-guarda/buscar-guarda.component';
import { ListadoSolicitudesComponent } from './solicitudes/listado-solicitudes/listado-solicitudes.component';
import { InformeAyuntamientosComponent } from './informes/informe-ayuntamientos/informe-ayuntamientos.component';
import { InformeAprobadosComponent } from './informes/informe-aprobados/informe-aprobados.component';

const routes: Routes = [
  { path: '', component: ListadoComponent },
  { path: 'cambio', component: CambioComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'admin/listado', component: GestionComponent},
  { path: 'admin/crear', component: CrearComponent},
  { path: 'admin/editar/:id', component: EditarComponent},
  { path: 'admin/buscar', component: BuscarComponent},
  { path: 'guardas/listado', component: ListadoComponent},
  { path: 'guardas/crear', component: CrearGuardaComponent},
  { path: 'guardas/editar/:id', component: EditarGuardaComponent},
  { path: 'guardas/buscar', component: BuscarGuardaComponent},
  { path: 'solicitudes/listado', component: ListadoSolicitudesComponent},
  { path: 'informes/ayuntamiento', component: InformeAyuntamientosComponent},
  { path: 'informes/aprobados', component: InformeAprobadosComponent},
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
