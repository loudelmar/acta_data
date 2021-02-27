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
    return this.http.get('');
  }
  /**  */
  getDepartamentos (){
    return this.http.get('');
  }

}
