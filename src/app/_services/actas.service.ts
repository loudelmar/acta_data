import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActasService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  /**
   * Devuelve un observable con data sobre las actas
   */
  getActas (){
    return this.http.get(this.apiUrl + 'personas_por_id_corto.php');
  } 
  /**  */
  getActa(id:Number){
    return this.http.get('');
  }
  /**  */
  getObstetras (){
    return this.http.get('');
  }
  /**  */
  getEmpleados (){
    return this.http.get('');
  }
}
