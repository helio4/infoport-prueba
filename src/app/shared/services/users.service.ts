import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from 'src/app/data-models/user';

@Injectable()
export class UsersService {
  private apiUrl: string = 'https://testimonialapi.toolcarton.com/api';
  private users: Subject<User[]> = new BehaviorSubject<User[]>([]);

  users$ = this.users.asObservable();

  constructor(private http: HttpClient) {}

  onUsersLoaded = (usersData: User[]) => {
    this.users.next(usersData);
  };

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
}
