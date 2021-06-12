import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//fake backend
import { fakeBackendProvider } from './_helpers';

//filtro
import { FilterPipe } from './_pipes/filter.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CargasComponent } from './cargas/cargas.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { PaisesComponent } from './paises/paises.component';
import 'bootstrap';
import { Olvidecontra2Component } from './olvidecontra2/olvidecontra2.component';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import * as $ from 'jquery';
import { Olvidecontra3Component } from './olvidecontra3/olvidecontra3.component';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AdminComponent } from './admin/admin.component';
import { HighlightDirective } from './_directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultaComponent,
    EditarperfilComponent,
    OlvidecontraComponent,
    CerrarsesionComponent,
    CargasComponent,
    EmpleadosComponent,
    ObstetrasComponent,
    ClinicasComponent,
    PaisesComponent,
    Olvidecontra2Component,
    CargaactasComponent,
    BusquedaComponent,
    InicioComponent,
    Olvidecontra3Component,
    AdminComponent,
    FilterPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
