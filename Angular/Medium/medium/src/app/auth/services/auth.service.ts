import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { AuthresponseInterface } from '../types/authResponse.interface';
import { CurrentUserInterface } from '../shared/types/currentUser.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthresponseInterface>(url, data)
      .pipe(map((response) => response.user));
  }
}
