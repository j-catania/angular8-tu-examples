import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class MonServiceService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserByUserName(userName: string): Observable<User[]> {

    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users', { params: new HttpParams().set('username', userName) });
  }

}
