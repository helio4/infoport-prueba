import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../data-models/user';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  users: User[] | undefined;
  filteredUsers: User[] | undefined;
  searchResult: User[] | undefined;
  filterMode: string | undefined;
  searchKey: string = '';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService.getAllUsers().subscribe(
      (response: User[]) => {
        this.users = response;
        this.filteredUsers = this.users;
        this.searchResult = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onSearchQuerryChange(key: string) {
    this.searchKey = key;
    this.searchResult = this.getSearchResult(key);
  }

  getSearchResult(key: string) {
    return this.filteredUsers?.filter((user) =>
      user.name.toLowerCase().includes(key.toLowerCase())
    );
  }

  onFilterModeChange(mode: string) {
    switch (mode) {
      case 'MAYOR_RATING':
        this.filteredUsers = this.users?.filter((user) => user.rating > 4.5);
        break;
      case 'MENOR_RATING':
        this.filteredUsers = this.users?.filter((user) => user.rating <= 4.5);
        break;
      case '':
        this.filteredUsers = this.users;
        break;
    }
    this.searchResult = this.getSearchResult(this.searchKey);
  }
}
