import { Component } from '@angular/core';
import { Role, User } from './_models';
import { AuthenticationService } from './_services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'actadata';
  user: User;
  

  constructor(private authenticationService: AuthenticationService){
    this.authenticationService.user.subscribe(x => this.user = x);
  }

  get isAdmin(){
    return this.user && this.user.role === Role.Admin;
  }

  get isUser(){
    return this.user && this.user.role === Role.User;
  }


  logout(){
    this.authenticationService.logout();
  }
}
