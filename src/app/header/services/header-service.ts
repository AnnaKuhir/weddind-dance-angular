import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Section } from 'src/app/models/section.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private readonly baseUrl: string;
constructor(private httpClient: HttpClient) { 
  this.baseUrl = environment.baseUrl;
}
  public getSection(): Observable<Section>{
    return this.httpClient.get<Section>(`${this.baseUrl}/app/api/v1/section`)
  }
}
