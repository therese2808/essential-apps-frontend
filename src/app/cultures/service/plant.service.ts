import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../model/plant.model';
import { DiseaseModel } from 'src/app/models/diseases.model';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private readonly BASE_URL = 'http://localhost:8083/api/v1/plants/culture';
  private baseUrlFastApi = "http://localhost:8000/entities";
  constructor(private http: HttpClient) {}

  public listPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(`${this.BASE_URL}`);
  }

  public addPlant(plant: Plant): Observable<Plant> {
    return this.http.post<Plant>(
      this.BASE_URL,
      JSON.stringify(plant),
      this.httpOptions
    );
  }

  public getPlantById(id: number): Observable<Plant> {
    return this.http.get<Plant>(`${this.BASE_URL}/${id}`);
  }

  public deletePlant(id: number): Observable<Plant> {
    return this.http.delete<Plant>(`${this.BASE_URL}/${id}`);
  }

  public updatePlant(id: number, plant: Plant): Observable<Plant> {
    return this.http.put<Plant>(
      `${this.BASE_URL}/${id}`,
      JSON.stringify(plant),
      this.httpOptions
    );
  }

  public checkPlantDiseas(image:File):Observable<DiseaseModel>{
    return this.http.post<DiseaseModel>(`${this.baseUrlFastApi}`, image);
  }
}
