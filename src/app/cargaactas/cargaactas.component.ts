import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Role, User } from '../_models';
import { AuthenticationService, UserService } from '../_services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudActaService } from '../servicio/crud-acta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargaactas',
  templateUrl: './cargaactas.component.html',
  styleUrls: ['./cargaactas.component.css']
})
export class CargaactasComponent implements OnInit {

  formularioDeActas:FormGroup;

  user: User;
  userFromApi: User;
  
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    public formulario: FormBuilder,
    private crudService:CrudActaService,
    private ruteador:Router
) {
    this.user = this.authenticationService.userValue;
    this.authenticationService.user.subscribe(x => this.user = x);

    this.formularioDeActas=this.formulario.group({
      tomo:[''],
      acta:[''],
      anio:[''],
      lomo:[''],
      delegacion:[''],
      dniInscripto:[''],
      sexo:[''],
      nombreInscripto:[''],
      apellidoInscripto:[''],
      fechaNacimientoInscripto:[''],
      fechaInscripcion:[''],
      provinciaInscripto:[''],
      departamentoInscripto:[''],
      localidadInscripto:[''],
      horaNacimiento:[''],
      nombreObstetra:[''],
      apellidoObstetra:[''],
      clinica:[''],
      tipoClinica:[''],
      dniMadre:[''],
      nombreMadre:[''],
      apellidoMadre:[''],
      barrioMadre:[''],
      calleMadre:[''],
      numCalleMadre:[''],
      detallesDomicilioMadre:[''],
      dniPadre:[''],
      nombrePadre:[''],
      apellidoPadre:[''],
      barrioPadre:[''],
      callePadre:[''],
      numCallePadre:[''],
      detallesDomicilioPadre:[''],
      declarantes:['']
    });
}


ngOnInit() {
  this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
  });
}

  enviarDatos():any{
    console.log("Presionaito");
    console.log(this.formularioDeActas.value);
    this.crudService.AgregarActa(this.formularioDeActas.value).subscribe();
    this.ruteador.navigateByUrl('/busqueda');

  }

  logout() {
    this.authenticationService.logout();
  }

  get isAdmin(){
    return this.user && this.user.role === Role.Admin;
  }

  get isUser(){
    return this.user && this.user.role === Role.User;
  }
}