import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { BorradoresComponent } from './borradores/borradores.component';
import { CargasComponent } from './cargas/cargas.component';
import { OlvidecontraComponent } from './olvidecontra/olvidecontra.component';
import { ObstetrasComponent } from './obstetras/obstetras.component';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { EditarperfilComponent } from './editarperfil/editarperfil.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { PaisesComponent } from './paises/paises.component';
import { Olvidecontra2Component } from './olvidecontra2/olvidecontra2.component';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { Olvidecontra3Component } from './olvidecontra3/olvidecontra3.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'borradores', component: BorradoresComponent},
  {path: 'cargas', component: CargasComponent},
  {path: 'cerrar-sesion', component: CerrarsesionComponent},
  {path: 'clinicas', component: ClinicasComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'editar-perfil', component: EditarperfilComponent},
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
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
