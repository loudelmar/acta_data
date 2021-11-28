import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from 'src/app/servicio/Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string="http://localhost:80/acta/";

  constructor(private clientHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1", datosEmpleado);
  }
}
