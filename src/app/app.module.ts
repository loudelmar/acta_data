import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { MiscargasComponent } from './miscargas/miscargas.component';
import { MiperfilComponent } from './miperfil/miperfil.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultaComponent,
    MiscargasComponent,
    MiperfilComponent,
    EditarperfilComponent,
    OlvidecontraComponent,
    RegistrarseComponent,
    CerrarsesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
