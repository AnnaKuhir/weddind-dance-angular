import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Section, Content } from '../models/section.model';
import { UserToken } from '../models/user-token.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private readonly baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }
  public getSection(): Observable<Section> {
    return this.httpClient.get<Section>(`${this.baseUrl}/app/api/v1/section`);
  }

  public getToken(): string {
    const token = localStorage.getItem('user-token');
    if (token){
      const result = JSON.parse(token) as UserToken;
      return result.access_token;
    }
  }

  public updataSection(content: Content): Observable<any> {
    const body = JSON.stringify(content);
    const token = this.getToken();
    let headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    if(token){
      headers = headers.set("Authorization", "Bearer " + token);
    }
    return this.httpClient.put(
      `${this.baseUrl}/app/api/v1/section/navigation`,
      body,
      { headers: headers, responseType: 'json' }
    );
  }
}
