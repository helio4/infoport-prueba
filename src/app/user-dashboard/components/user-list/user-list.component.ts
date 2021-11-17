import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/data-models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  users: User[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
