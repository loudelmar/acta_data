import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class UsersService {
  constructor(
      private http: HttpClient,
      private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post(environment.apiUrl, user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}
