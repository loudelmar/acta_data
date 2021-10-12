import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Role, User } from '../_models';
import { AuthenticationService, UserService } from '../_services';

@Component({
  selector: 'app-cargaactas',
  templateUrl: './cargaactas.component.html',
  styleUrls: ['./cargaactas.component.css']
})
export class CargaactasComponent implements OnInit {

  user: User;
  userFromApi: User;
  
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
) {
    this.user = this.authenticationService.userValue;
    this.authenticationService.user.subscribe(x => this.user = x);
}


ngOnInit() {
  this.userService.getById(this.user.id).pipe(first()).subscribe(user => {
      this.userFromApi = user;
  });
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