import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//fake backend
import { fakeBackendProvider } from './_helpers';

//filtro
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatTableFilter, MatTableFilterModule } from 'mat-table-filter';
import { DataTablesModule } from "angular-datatables";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import 'bootstrap';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import * as $ from 'jquery';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AdminComponent } from './admin/admin.component';
import { MiscargasComponent } from './miscargas/miscargas.component';
import { CookieService } from 'ngx-cookie-service';
import { AgregarEmpleadoComponent } from './admin/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './admin/editar-empleado/editar-empleado.component';
import { BorrarEmpleadoComponent } from './admin/borrar-empleado/borrar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CargaactasComponent,
    BusquedaComponent,
    InicioComponent,
    AdminComponent,
    MiscargasComponent,
    AgregarEmpleadoComponent,
    EditarEmpleadoComponent,
    BorrarEmpleadoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    MatTableFilterModule,
    DataTablesModule
    
  ],
  providers: [
    CookieService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true},

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
