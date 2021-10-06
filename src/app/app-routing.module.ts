import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaisesComponent } from './paises/paises.component';
import { CargaactasComponent } from './cargaactas/cargaactas.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdminComponent } from './admin/admin.component';
import { MiscargasComponent } from './miscargas/miscargas.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'paises', component: PaisesComponent},
  {path: 'carga-actas', component: CargaactasComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'mis-cargas', component: MiscargasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
