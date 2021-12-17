import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudActaService } from '../servicio/crud-acta.service';
import { Router } from '@angular/router';
import { ContentObserver } from '@angular/cdk/observers';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cargaactas',
  templateUrl: './cargaactas.component.html',
  styleUrls: ['./cargaactas.component.css']
})
export class CargaactasComponent implements OnInit {

  formularioDeActas:FormGroup;
  
  constructor(
    public formulario: FormBuilder,
    private crudService:CrudActaService,
    private ruteador:Router
    ) {

    this.formularioDeActas = this.formulario.group({
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
      localidadInscripto:[''],
      horaNacimiento:[''],
      nombreObstetra:[''],
      apellidoObstetra:[''],
      clinica:[''],
      tipoClinica:[''],
      dniMadre:[''],
      nombreMadre:[''],
      apellidoMadre:[''],
      domicilioMadre:[''],
      dniPadre:[''],
      nombrePadre:[''],
      apellidoPadre:[''],
      domicilioPadre:[''],
      declarantes:[''],
      observaciones:[''],
    });
}


ngOnInit(): void {

}

  enviarDatos():any{
    console.log(this.formularioDeActas.value);
    this.crudService.AgregarActa(this.formularioDeActas.value).subscribe(respuesta=>{

      if (this.formularioDeActas.valid){
        window.alert("Cambios guardados!")
        this.ruteador.navigate(['/busqueda']);
      } else {
        window.alert("Faltan rellenar campos")
      }
      
    });
  }
}