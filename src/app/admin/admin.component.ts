import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['./admin.component.css'],
 })
export class AdminComponent implements OnInit {

    busqueda;

    Empleados:any;

    apellido:any;

    constructor(
        private crudService: CrudService,
        ) { }

    ngOnInit():void {

        this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
            console.log(respuesta);
            this.Empleados=respuesta;
        });
    }

    borrarRegistro(id_empleado:any, iControl:any){

        console.log(id_empleado);
        console.log(iControl);

        if(window.confirm("¿Desea eliminar el empleado?")){ 

        this.crudService.BorrarEmpleado(id_empleado).subscribe((respuesta)=>{
            this.Empleados.splice(iControl,1);
        });
    }
    }

}