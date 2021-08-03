import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { CookieService } from "ngx-cookie-service";

@Injectable({ providedIn: 'root'})
export class UsersService {
  constructor(
      private http: HttpClient,
      private cookies: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}