import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment-docker";

@Injectable({ providedIn: 'root'})
export class UsersService {

  private apiUrl: string;

  constructor(private http: HttpClient, private cookies: CookieService) {
    this.apiUrl = environment.apiUrl;
  }

  /**
   * Devuelve un observable con data sobre las actas
   */
  getActas (){
    return this.http.get(this.apiUrl + 'actas.php');
  } 

  /**  */
  getActa(id:Number){
    return this.http.get(this.apiUrl + 'personas_por_id_largo.php');
  }


  login(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  setToken(token: string) {
    this.cookies.set(this.apiUrl, token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}