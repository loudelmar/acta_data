import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { BorradoresComponent } from './borradores/borradores.component';
import { CargasComponent } from './cargas/cargas.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { PersonasComponent } from './personas/personas.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'cargas', component: CargasComponent},
  {path: 'borradores', component: BorradoresComponent},
  {path: 'olvide-contra', component: OlvidecontraComponent},
  {path: 'registro', component: RegistrarseComponent},
  {path: 'personas', component: PersonasComponent},
  {path: 'obstetras', component: ObstetrasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
