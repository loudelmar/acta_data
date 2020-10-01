import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {ActasComponent} from './actas/actas.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', component: ActasComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
