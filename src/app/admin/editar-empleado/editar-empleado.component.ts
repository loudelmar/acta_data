import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  formularioDeEmpleados:FormGroup;

  elID:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder
    ) { 

    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);

    this.crudService.ObtenerEmpleado(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioDeEmpleados.setValue({
          dni:respuesta[0]['dni_empleado'],
          nombre:respuesta[0]['nombre_empleado'],
          apellido:respuesta[0]['apellido_empleado'],
          fechaNacimiento:respuesta[0]['fecha_nacimiento_empleado'],
          //sectorTrabajo: respuesta[0]['sector_trabajo'],
          mail: respuesta[0]['mail'],
          contraseña: respuesta[0]['contrasenia']
        });
      }
    );

    this.formularioDeEmpleados=this.formulario.group({
      dni: [''],
      nombre: [''],
      apellido: [''],
      fechaNacimiento: [''],
      sectorTrabajo: [''],
      mail: [''],
      contraseña: [''],
    });
  }

  ngOnInit(): void {
  }

}
