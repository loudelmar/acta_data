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

  /** Gets a list of available countries */
  public getPaises(){
    return this.http.get(this.apiUrl + 'paises_por_id.php');
  }

  /**
   * Creates a new country
   * @param name - The country name
   */
   public createPais(name: string){
    const formData = new FormData();
    formData.append('nombre', name);

    return this.http.post(this.apiUrl + 'pais_nuevo.php', formData);
  }

  /**
   * Deletes a country by id
   * @param id - The country id
   */
  public deletePais(id: string){
    const formData = new FormData();
    formData.append('id', id);

    return this.http.post(this.apiUrl + 'pais_eliminar.php', formData);
  }

}
