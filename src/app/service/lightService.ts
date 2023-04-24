import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Light } from '../models/light';

@Injectable({
  providedIn: 'root'
})
export class LightService {

  apiUrl:string = "http://localhost:8085/api/v1/Light";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
 // getNodes(){
  //   return this.http.get<Node[]>(this.apiUrl,this.httpOptions)
  // }
  getLightById(id:string){
    return this.http.get<Light>(this.apiUrl+'/'+id)
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
