import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Node } from '../models/node';
import { Observable, observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NodeServiceService {
  //ioUrl=environment.SOCKET_ENDPOINT
  node: Observable<any>;
 // socketio :any
  apiUrl:string = "http://localhost:8085/api/v1/sensors";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) {
  //   this.socketio=io('http://localhost:3000', { withCredentials: true }).connect()
  //  // this.socketio.connected=true
  //   console.log(this.socketio);
  //  // this.socketio.emit("yo","test")
  }

  // listen(eventName:string){
  //   return new Observable((subscriber)=>{
  //     this.socketio.on(eventName,(data)=>{
  //       subscriber.next(data);
  //     })
  //   })
  // }
  // test(){
  //   this.socketio.on("test",data=>{console.log(data);console.log('est');})
  // }

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
