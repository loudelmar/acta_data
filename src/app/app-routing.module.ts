import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ConsultaComponent } from './consulta/consulta.component';
import { LoginComponent } from './login/login.component';
import { MiscargasComponent } from './miscargas/miscargas.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'miscargas', component: MiscargasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
