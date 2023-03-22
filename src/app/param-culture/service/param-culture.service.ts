import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Param } from '../model/Param';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParamService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private readonly BASE_URL =
    'http://localhost:8083/api/v1/plants/params-culture';

  constructor(private http: HttpClient) {}

  public listParamsCulture(): Observable<Param[]> {
    return this.http.get<Param[]>(`${this.BASE_URL}`);
  }

  public deleteParamCulture(id: number): Observable<Param> {
    return this.http.delete<Param>(`${this.BASE_URL}/${id}`);
  }

  public addPlant(paramsCulture: Param): Observable<Param> {
    return this.http.post<Param>(
      this.BASE_URL,
      JSON.stringify(paramsCulture),
      this.httpOptions
    );
  }

  public updateParamPlant(id: number, paramCulture: Param): Observable<Param> {
    return this.http.put<Param>(`${this.BASE_URL}/${id}`, paramCulture);
  }

  public getParamCultureById(id: number): Observable<Param> {
    return this.http.get<Param>(`${this.BASE_URL}/${id}`);
  }
}
