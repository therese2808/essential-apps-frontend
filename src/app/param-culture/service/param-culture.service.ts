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

  public addPlant(paramsCulture: ParamCulture): Observable<ParamCulture> {
    return this.http.post<ParamCulture>(
      this.BASE_URL,
      JSON.stringify(paramsCulture),
      this.httpOptions
    );
  }

  public updateParamPlant(
    id: number,
    paramCulture: ParamCulture
  ): Observable<ParamCulture> {
    return this.http.put<ParamCulture>(`${this.BASE_URL}/${id}`, paramCulture);
  }

  public getParamCultureById(id: number): Observable<ParamCulture> {
    return this.http.get<ParamCulture>(`${this.BASE_URL}/${id}`);
  }
}
