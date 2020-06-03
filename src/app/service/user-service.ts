import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserToken } from '../models/user-token.model';
import { LoginModel } from '../models/login-user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  public login(loginModel: LoginModel): Observable<UserToken> {
    const body = JSON.stringify(loginModel);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.httpClient.post<UserToken>(
      `${this.baseUrl}/app/api/v1/user/login`, body, { headers: headers, responseType: 'json' }
    );
  }
}
