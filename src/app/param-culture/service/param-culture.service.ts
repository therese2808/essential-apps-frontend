import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ParamCulture } from '../model/ParamCulture';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParamCultureService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private readonly BASE_URL = 'http://localhost:3000/paramsCulture';

  constructor(private http: HttpClient) {}

  public listParamsCulture(): Observable<ParamCulture[]> {
    return this.http.get<ParamCulture[]>(`${this.BASE_URL}`);
  }

  public deleteParamCulture(id: number): Observable<ParamCulture> {
    return this.http.delete<ParamCulture>(`${this.BASE_URL}/${id}`);
  }
}
