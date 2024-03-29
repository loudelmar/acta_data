import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Acta } from './Acta';


@Injectable({
  providedIn: 'root'
})
export class CrudActaService {

  API: string="http://localhost:80/acta/actas/"

  constructor(private clienteHttp:HttpClient) { }

  AgregarActa(datosActa:Acta):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1", datosActa);
  }

  ObtenerActas (){
    return this.clienteHttp.get(this.API);
  }

  ObtenerActa(id_acta:any):Observable<any>{
      return this.clienteHttp.get(this.API+"?consultar="+id_acta);
  }

  EditarActa(id_acta:any, datosActa:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id_acta, datosActa);
  }
}
