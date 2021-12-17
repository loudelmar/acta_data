import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './_helpers';
import { Role } from './_models';
import { AgregarEmpleadoComponent } from './admin/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './admin/editar-empleado/editar-empleado.component';
import { EditarActaComponent } from './busqueda/editar-acta/editar-acta.component';
import { VerActaComponent } from './busqueda/ver-acta/ver-acta.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'carga-actas', component: CargaactasComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
  {path: 'busqueda', children:[
    {path: '', component: BusquedaComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
    {path: 'editar-acta/:id', component: EditarActaComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
    {path: 'ver-acta/:id', component: VerActaComponent, canActivate: [AuthGuard], data: {roles: [Role.User]}},
  ]},
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuard]},
  {path: 'admin', children:[
    {path: '', component: AdminComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
    {path: 'agregar-empleado', component: AgregarEmpleadoComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
    {path: 'editar-empleado/:id', component: EditarEmpleadoComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}},
    {path: 'buscar/:searchTerm', component: AdminComponent, canActivate: [AuthGuard], data: {roles: [Role.Admin]}}
  ]},

  // otherwise redirect to home
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
