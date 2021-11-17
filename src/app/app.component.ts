import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './data-models/user';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  template: `<div class="container"><router-outlet></router-outlet></div>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'infoport-prueba';
  users: User[] | undefined = undefined;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        this.usersService.onUsersLoaded(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
