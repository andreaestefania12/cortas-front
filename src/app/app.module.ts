import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MatExpansionModule } from '@angular/material/expansion';

import { LayoutModule } from '@angular/cdk/layout';
import { CambioComponent } from './oficinas/cambio/cambio.component';
import { DatosComponent } from './oficinas/datos/datos.component';
import { ProfileComponent } from './profile/profile.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { CrearComponent } from './admin/crear/crear.component';
import { GestionComponent } from './admin/gestion/gestion.component';
import { ListadoComponent } from './guardas/listado/listado.component';


import { MatNativeDateModule } from '@angular/material/core';
import { EditarComponent } from './admin/editar/editar.component';
import { BuscarComponent } from './admin/buscar/buscar.component';
import {MatRadioModule} from '@angular/material/radio';
import { CrearGuardaComponent } from './guardas/crear-guarda/crear-guarda.component';
import { EditarGuardaComponent } from './guardas/editar-guarda/editar-guarda.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { BuscarGuardaComponent } from './guardas/buscar-guarda/buscar-guarda.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DatosComponent,
    CambioComponent,
    ListadoComponent,
    CrearComponent,
    GestionComponent,
    EditarComponent,
    BuscarComponent,
    CrearGuardaComponent,
    EditarGuardaComponent,
    BuscarGuardaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    LayoutModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
