import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { BorradoresComponent } from './borradores/borradores.component';
import { CargasComponent } from './cargas/cargas.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { PersonasComponent } from './personas/personas.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { PaisesComponent } from './paises/paises.component';

const routes: Routes = [
  {path: 'borradores', component: BorradoresComponent},
  {path: 'cargas', component: CargasComponent},
  {path: 'cerrarsesion', component: CerrarsesionComponent},
  {path: 'clinicas', component: ClinicasComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'editarperfil', component: EditarperfilComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: '', component: LoginComponent},
  {path: 'obstetras', component: ObstetrasComponent},
  {path: 'olvidecontra', component: OlvidecontraComponent},
  {path: 'paises', component: PaisesComponent},
  {path: 'personas', component: PersonasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
