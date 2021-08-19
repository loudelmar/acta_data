import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { PaisesComponent } from './paises/paises.component';
import { Olvidecontra2Component } from './olvidecontra2/olvidecontra2.component';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { Olvidecontra3Component } from './olvidecontra3/olvidecontra3.component';
import { AdminComponent } from './admin/admin.component';
import { MiscargasComponent } from './miscargas/miscargas.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadosComponent},
  {path: '', component: LoginComponent},
  {path: 'obstetras', component: ObstetrasComponent},
  {path: 'olvide-contra', component: OlvidecontraComponent},
  {path: 'olvide-contra-2', component: Olvidecontra2Component},
  {path: 'paises', component: PaisesComponent},
  {path: 'carga-actas', component: CargaactasComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'olvide-contra-3', component: Olvidecontra3Component},
  {path: 'admin', component: AdminComponent},
  {path: 'mis-cargas', component: MiscargasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
