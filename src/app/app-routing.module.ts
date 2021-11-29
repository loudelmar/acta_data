import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { MiscargasComponent } from './miscargas/miscargas.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { AgregarEmpleadoComponent } from './admin/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './admin/editar-empleado/editar-empleado.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'carga-actas', component: CargaactasComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
  {path: 'busqueda', component: BusquedaComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
  {path: 'mis-cargas', component: MiscargasComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
  {path: 'agregar-empleado', component: AgregarEmpleadoComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
  {path: 'editar-empleado/:id', component: EditarEmpleadoComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},

  // otherwise redirect to home
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
