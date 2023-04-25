import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Node } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket:Socket
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }
  constructor() {
   }
  listenServer():Observable<any>{
    return new Observable((subcribe)=>{
      this.socket.on('newMessage', msg => {
        subcribe.next(msg);
      });
    })

  }
  sendMessage(msg: Node) {
    this.socket.emit('sendMessage', { message: msg });
  }
}
