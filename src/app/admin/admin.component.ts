import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models';
import { UserService } from '../_services';

import { CrudService } from '../servicio/crud.service';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['./admin.component.css'],
 })
export class AdminComponent implements OnInit {

    Empleados:any;

    users: User[] = [];

    constructor(
        private userService: UserService,
        private crudService: CrudService
        ) { }

    ngOnInit():void {

        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });

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