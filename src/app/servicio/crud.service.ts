import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/servicio/Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string="http://localhost:80/acta/empleados/";

  constructor(private clientHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1",datosEmpleado);
  }

  ObtenerEmpleados(){
    return this.clientHttp.get(this.API);
  }

  BorrarEmpleado(id_empleado:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id_empleado);
  }

  ObtenerEmpleado(id_empleado:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id_empleado);
  }

  EditarEmpleado(id_empleado:any, datosEmpleado:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id_empleado, datosEmpleado);
  }

}
