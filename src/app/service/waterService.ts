import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Water } from '../models/water';

@Injectable({
  providedIn: 'root'
})
export class WaterService {

  apiUrl:string = "http://localhost:8085/api/v1/water";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
 // getNodes(){
  //   return this.http.get<Node[]>(this.apiUrl,this.httpOptions)
  // }
  getWaterById(id:string){
    return this.http.get<Water>(this.apiUrl+'/'+id)
  }
  // addNode(node:Node){
  //   return this.http.post(this.apiUrl,node)
  // }
  // updateNode(id:string,node:Node){
  //   return this.http.put(this.apiUrl+'/'+id,node)
  // }
  // deleteNode(id:string){
  //   return this.http.delete(this.apiUrl+'/'+id)
  // }
}
