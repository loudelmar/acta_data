import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//fake backend
import { fakeBackendProvider } from './_helpers';

//filtro
import { FilterPipe } from './_pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableFilter, MatTableFilterModule } from 'mat-table-filter';
import { DataTablesModule } from "angular-datatables";
import { ActasService } from './busqueda/actas-service';

//primeNG
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
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
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatTableFilterModule,
    DataTablesModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},

    //provider de primeNG
    ActasService,

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
