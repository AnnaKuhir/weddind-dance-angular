import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly baseUrl: string;
constructor(private httpClient: HttpClient) { 
  this.baseUrl = environment.baseUrl;
}
  public getSection(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/app/api/v1/section`)
  }
}
