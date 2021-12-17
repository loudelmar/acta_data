import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudActaService } from 'src/app/servicio/crud-acta.service';

@Component({
  selector: 'app-editar-acta',
  templateUrl: './editar-acta.component.html',
  styleUrls: ['./editar-acta.component.css']
})
export class EditarActaComponent implements OnInit {

  fechaNacimientoInscripto:Date;

  formularioDeActas:FormGroup;

  elID:any;  

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudActaService,
    public formulario:FormBuilder,
    private ruteador:Router,
  ) {

    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.fechaNacimientoInscripto = new Date();
    console.log(this.fechaNacimientoInscripto);

    this.formularioDeActas=this.formulario.group({  
      id_clinica_hospital:['', Validators.required],
      id_localidad:['', Validators.required],
      id_madre:['', Validators.required],
      id_obstetra:['', Validators.required],
      id_padre:['', Validators.required],
      id_sexo:['', Validators.required],
      tomo:['', Validators.required],
      acta:['', Validators.required],
      anio:['', Validators.required],
      lomo:['', Validators.required],
      delegacion:['', Validators.required],
      dniInscripto:['', Validators.required],
      sexo:['', Validators.required],
      nombreInscripto:['', Validators.required],
      apellidoInscripto:['', Validators.required],
      fechaNacimientoInscripto:['', Validators.required],
      fechaInscripcion:['', Validators.required],
      localidadInscripto:['', Validators.required],
      horaNacimiento:['', Validators.required],
      nombreObstetra:['', Validators.required],
      apellidoObstetra:['', Validators.required],
      clinica:['', Validators.required],
      tipoClinica:['', Validators.required],
      dniMadre:['', Validators.required],
      nombreMadre:['', Validators.required],
      apellidoMadre:['', Validators.required],
      domicilioMadre:['', Validators.required],
      dniPadre:['', Validators.required],
      nombrePadre:['', Validators.required],
      apellidoPadre:['', Validators.required],
      domicilioPadre:['', Validators.required],
      declarantes:['', Validators.required],
      observaciones:['', Validators.required],
    });

    this.crudService.ObtenerActa(this.elID).subscribe( respuesta=>{

        console.log(respuesta);

        this.formularioDeActas.setValue({
          id_clinica_hospital:respuesta[0]['id_clinica_hospital'],
          id_localidad:respuesta[0]['id_localidad'],
          id_madre:respuesta[0]['id_madre'],
          id_obstetra:respuesta[0]['id_obstetra'],
          id_padre:respuesta[0]['id_padre'],
          id_sexo:respuesta[0]['id_sexo'],
          tomo:respuesta[0]['num_tomo'],
          acta:respuesta[0]['num_acta'],
          anio:respuesta[0]['anio_acta'],
          lomo:respuesta[0]['lomo_acta'],
          delegacion:respuesta[0]['delegacion'],
          dniInscripto:respuesta[0]['dni_inscripto'],
          sexo:respuesta[0]['id_sexo'],
          nombreInscripto:respuesta[0]['nombre_inscripto'],
          apellidoInscripto:respuesta[0]['apellido_inscripto'],
          fechaNacimientoInscripto:respuesta[0]['fecha_nacimiento_inscripto'],
          fechaInscripcion:respuesta[0]['fecha_inscripcion'],
          localidadInscripto:respuesta[0]['id_localidad'],
          horaNacimiento:respuesta[0]['horario_nacimiento'],
          nombreObstetra:respuesta[0]['nombre_obstetra'],
          apellidoObstetra:respuesta[0]['apellido_obstetra'],
          clinica:respuesta[0]['nombre_clinica_hospital'],
          tipoClinica:respuesta[0]['tipo_clinica_hospital'],
          dniMadre:respuesta[0]['dni_madre'],
          nombreMadre:respuesta[0]['nombre_madre'],
          apellidoMadre:respuesta[0]['apellido_madre'],
          domicilioMadre:respuesta[0]['domicilio_madre'],
          dniPadre:respuesta[0]['dni_padre'],
          nombrePadre:respuesta[0]['nombre_padre'],
          apellidoPadre:respuesta[0]['apellido_padre'],
          domicilioPadre:respuesta[0]['domicilio_padre'],
          declarantes:respuesta[0]['declarantes_acta'],
          observaciones:respuesta[0]['observaciones_acta'],
        });
      }
    );
    
  }

  ngOnInit(): void {}

  enviarDatos():any{
    console.log(this.elID);
    console.log(this.formularioDeActas.value);

    this.crudService.EditarActa(this.elID, this.formularioDeActas.value).subscribe(()=>{

      if (this.formularioDeActas.valid){
        window.alert("Cambios guardados!")
        this.ruteador.navigate(['/busqueda']);
      } else {
        window.alert("Faltan rellenar campos")
      }

    })
  }

}
