import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CargasComponent } from './cargas/cargas.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { BorradoresComponent } from './borradores/borradores.component';
import { PersonasComponent } from './personas/personas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { PaisesComponent } from './paises/paises.component';
import { FormsModule } from '@angular/forms';
import 'bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultaComponent,
    EditarperfilComponent,
    OlvidecontraComponent,
    CerrarsesionComponent,
    PersonasComponent,
    BorradoresComponent,
    CargasComponent,
    EmpleadosComponent,
    ObstetrasComponent,
    ClinicasComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
