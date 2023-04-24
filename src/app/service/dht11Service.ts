import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dht11 } from '../models/dht11';

@Injectable({
  providedIn: 'root'
})
export class Dht11Service {

  apiUrl:string = "http://localhost:8085/api/v1/dht11";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
 // getNodes(){
  //   return this.http.get<Node[]>(this.apiUrl,this.httpOptions)
  // }
  getDht11ById(id:string){
    return this.http.get<Dht11>(this.apiUrl+'/'+id)
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
