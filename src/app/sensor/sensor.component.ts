import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Node } from '../models/node';
import { User } from '../models/user';
import { NodeServiceService } from '../service/node-service.service';
import { UserServiceService } from '../service/user-service.service';
import { SocketService } from '../service/socket.service';
import { environment } from 'src/environments/environment';
import { Socket, io } from 'socket.io-client';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit {

  // ioUrl=environment.SOCKET_ENDPOINT
  // socket:Socket
  // connected: boolean;
  nodes : Node[] = [];
  user: User;
  fan=2; pump=2;
  constructor(private nodeService: NodeServiceService, private userService: UserServiceService, private router:Router, private socketService: SocketService) {}

  ngOnInit(): void {
    // this.socket.connected=true
    // console.log(this.socket);
   // this.socket.on("pas",data=>{console.log(data);})
    this.getAll();
  //   this.nodeService.listen('pas').subscribe((data)=>{
  //     console.log(data); console.log('test');
      
  //   })
  //  this.nodeService.test();
  }
  getAll(){
    this.nodeService.getNodes().subscribe({
      next : (data)=>{
        this.nodes = data;
        console.log(data);
      },
      error : (error)=>console.log(error),
     // complete : () => console.log("I m finishing")
    })
  }
   Delete(id:string){
     this.nodeService.deleteNode(id).subscribe(
       (data) => {
        this.getAll();
        console.log(data);
        
       })
   }
   toggleFan(fan:any,id:string) {
    node=new Node({fan:fan})
    this.nodeService.updateNode(id,node)
    .subscribe( 
      { next : ()=>this.router.navigateByUrl('/sensor')}
      )
    this.fan = this.fan === 2 ? 3 : 2;
    console.log(this.fan);
    
  }
  togglePump(pump:any,id:string) {
    this.pump = this.pump === 2 ? 3 : 2;
  }

//    toggleFan(event) {
//     if ( this.fan =  2 ) {
//       event.target.checked
//  }else{this.fan =  3;}
//   }

//   togglePump(checked: boolean) {
//     this.fan = checked ? 2 : 3;
//     console.log('Fan is', this.fan);
//   }

}
