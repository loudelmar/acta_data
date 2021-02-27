import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { MisborradoresComponent } from './misborradores/misborradores.component';
import { MiscargasComponent } from './miscargas/miscargas.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'miscargas', component: MiscargasComponent},
  {path: 'misborradores', component: MisborradoresComponent},
  {path: 'olvide-contra', component: OlvidecontraComponent},
  {path: 'registro', component: RegistrarseComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
