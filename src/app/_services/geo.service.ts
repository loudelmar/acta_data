import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  /**  */
  getLocalidades (){
    return this.http.get(this.apiUrl + 'localidades_por_departamento');
  }
  /**  */
  getDepartamentos (){
    return this.http.get(this.apiUrl + 'departamentos_por_provincia');
  }

  /**  */
  getProvincias (){
    return this.http.get(this.apiUrl + 'provincias_por_pais');
  }
  
  /**  */
  getPaises (){
    return this.http.get(this.apiUrl + 'paises_por_id');
  }

}
