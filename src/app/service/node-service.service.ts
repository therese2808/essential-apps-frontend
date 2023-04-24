import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Node } from '../models/node';


@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {

  apiUrl:string = "http://localhost:8085/api/v1/sensors";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http:HttpClient) { }

  getNodes(){
    return this.http.get<Node[]>(this.apiUrl,this.httpOptions)
  }
  getNodeById(id:string){
    return this.http.get<Node>(this.apiUrl+'/'+id)
  }
  addNode(node:Node){
    return this.http.post(this.apiUrl,node)
  }
  updateNode(id:string,node:Node){
    return this.http.put(this.apiUrl+'/'+id,node)
  }
  deleteNode(id:string){
    return this.http.delete(this.apiUrl+'/'+id)
  }
}
