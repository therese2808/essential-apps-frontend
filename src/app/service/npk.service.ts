import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Npk } from '../models/npk';

@Injectable({
  providedIn: 'root'
})
export class NpkService {

  apiUrl:string = "http://localhost:8085/api/v1/npk";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
 // getNodes(){
  //   return this.http.get<Node[]>(this.apiUrl,this.httpOptions)
  // }
  getNpkById(id:string){
    return this.http.get<Npk>(this.apiUrl+'/'+id)
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
