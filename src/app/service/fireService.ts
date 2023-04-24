import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fire } from '../models/fire';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  apiUrl:string = "http://localhost:8085/api/v1/fire";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }
 // getNodes(){
  //   return this.http.get<Node[]>(this.apiUrl,this.httpOptions)
  // }
  getFireById(id:string){
    return this.http.get<Fire>(this.apiUrl+'/'+id)
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
