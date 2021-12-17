import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/servicio/crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  Empleados:any;

  formularioDeEmpleados: FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router,
    private activeRoute:ActivatedRoute
    ){

    this.formularioDeEmpleados = this.formulario.group({
      dni: [''],
      nombre: [''],
      apellido: [''],
      fechaNacimiento: [''],
      sectorTrabajo: [''],
      mail: [''],
      contrasenia: [''],
    });

   }

  ngOnInit(): void {}

  enviarDatos(): any {
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{

      if (this.formularioDeEmpleados.valid){
        window.alert("Cambios guardados!")
        this.ruteador.navigate(['/admin']);
      } else {
        window.alert("Faltan rellenar campos")
      }

    });
  }
}
