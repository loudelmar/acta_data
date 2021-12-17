import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { Role, User } from '../_models';
import { AuthenticationService } from '../_services';

@Component({ templateUrl: 'inicio.component.html',
styleUrls: ['./inicio.component.css'] })
export class InicioComponent {
  
    user: User;
    userFromApi: User;
    
    constructor(
      private authenticationService: AuthenticationService
  ) {
      this.user = this.authenticationService.userValue;
      this.authenticationService.user.subscribe(x => this.user = x);
  }


  ngOnInit() {

}

    logout() {
      this.authenticationService.logout();
    }
  
    get isAdmin(){
      return this.user && this.user.role === Role.Admin;
    }
  
    get isUser(){
      return this.user && this.user.role === Role.User;
    }
}
