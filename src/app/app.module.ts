import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { CargasComponent } from './cargas/cargas.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { BorradoresComponent } from './borradores/borradores.component';
import { PersonasComponent } from './personas/personas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';
import { PadremadreComponent } from './padremadre/padremadre.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultaComponent,
    MiperfilComponent,
    EditarperfilComponent,
    OlvidecontraComponent,
    RegistrarseComponent,
    CerrarsesionComponent,
    PersonasComponent,
    BorradoresComponent,
    CargasComponent,
    EmpleadosComponent,
    ObstetrasComponent,
    PadremadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
